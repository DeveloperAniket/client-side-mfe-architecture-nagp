const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'insurance-mfe-app',

  exposes: {
    './InsuranceDetailsModule': './projects/insurance-mfe-app/src/app/insurance-details/insurance-details.module.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
