import merge from 'webpack-merge';

import getCommonConfig from './webpack.common';
import { loadDevCss } from './css';

export default () => {
  return merge(getCommonConfig(), {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',

    plugins: [
      //
    ],
  },
  loadDevCss(),
  );
}