const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');
module.exports = withModuleFederationPlugin({

  remotes: {
    "insuranceMfeApp": "https://container-application.netlify.app/insurance/remoteEntry.js",
    "premiumMfeApp": "https://container-application.netlify.app/premium/remoteEntry.js",
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});