const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');
module.exports = withModuleFederationPlugin({

  remotes: {
    "insuranceMfeApp": "https://localhost:8080/insurance-mfe-app/remoteEntry.js",
    "premiumMfeApp": "https://localhost:8080/premium-mfe-app/remoteEntry.js",
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});