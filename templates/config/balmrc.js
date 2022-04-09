const { solidPlugin } = require('esbuild-plugin-solid');

// Documentation - https://balm.js.org/docs/config/
// 中文文档 - https://balm.js.org/docs/zh/config/
module.exports = {
  server: {
    // proxyConfig: {
    //   context: '/api',
    //   options: {
    //     target: 'http://your.project.dev', // Target host
    //     changeOrigin: true // Needed for virtual hosted sites
    //   }
    // }
  },
  scripts: {
    bundler: 'esbuild',
    entry: './src/scripts/index.jsx',
    buildOptions: {
      bundle: true,
      loader: {
        '.svg': 'dataurl'
      },
      logLevel: 'info',
      plugins: [solidPlugin()]
    }
  },
  assets: {
    cache: true
  }
  // More Config
};
