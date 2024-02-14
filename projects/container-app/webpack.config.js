const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  remotes: {
    "insuranceMfeApp": "http://localhost:4200/insurance/remoteEntry.js",
    "premiumMfeApp": "http://localhost:4200/premium/remoteEntry.js",
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
