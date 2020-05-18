import webpack from 'webpack';
import DevServer from 'webpack-dev-server';
import hot from 'webpack-hot-middleware';
import chalk from 'chalk';

import getConfig from './config/webpack.dev';

import { HOST, PORT } from './constants';

const compiler = webpack(getConfig());

const server = new DevServer(compiler, {
  host: HOST,
  port: PORT,
  historyApiFallback: true,
  overlay: true,
  quiet: true,
  clientLogLevel: 'none',
  noInfo: true,
  after: (app) => {
    app.use(
      hot(compiler, {
        log: false,
      })
    )
  }
});

server.listen(PORT, HOST, () => {
  console.log(
    `${chalk.greenBright(' SERVER LISTENING ON')} ${chalk.blueBright(`http://${HOST}:${PORT}`)}`
  );
})

