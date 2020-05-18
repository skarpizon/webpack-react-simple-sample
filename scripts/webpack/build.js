import webpack from 'webpack';
import chalk from 'chalk';

import getConfig from './config/webpack.prod';

console.log('===> ', chalk.yellow('START BUILDING'));

const compiler = webpack(getConfig());

compiler.run((error, stats) => {
  if (error) {
    console.error(error.stack || error);

    if (error.details) {
      console.error(error.details);
    }

    return null;
  }

  const info = stats.toString({
    hash: true,
    colors: true,
    modules: false,
    entrypoints: false,
  });

  console.log(chalk.greenBright('BUILD COMPLETED'));
  console.log(info);

  if (stats.hasErrors()) {
    console.log(chalk.redBright('ERROR'))
  }

  if (stats.hasWarnings()) {
    console.log(chalk.yellowBright('WARNING'))
  }
  

})
