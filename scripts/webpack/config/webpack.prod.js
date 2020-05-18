import { CleanWebpackPlugin  } from 'clean-webpack-plugin';
import merge from 'webpack-merge'; 
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'; 


import getCommonConfig from './webpack.common';
import { loadProdCss } from './css';

export default () => {
  return merge(getCommonConfig(), {
    mode: 'production',
    devtool: false,
    plugins: [
      new CleanWebpackPlugin(),
      new BundleAnalyzerPlugin({
        analyzerMode: 'disabled',
        openAnalyzer: false,
        generateStatsFile: true,
      }),
    ],
  },
  loadProdCss(),
  );
}