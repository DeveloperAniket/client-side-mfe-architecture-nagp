const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');
module.exports = withModuleFederationPlugin({

  remotes: {
    "insuranceMfeApp": "https://client-side-mfe-architecture-nagp.netlify.app/insurance-mfe-app/remoteEntry.js",
    "premiumMfeApp": " https://client-side-mfe-architecture-nagp.netlify.app/premium-mfe-app/remoteEntry.js",
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },
});