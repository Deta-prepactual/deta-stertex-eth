// Use the base configuration as-is.
module.exports = {
  /* eslint-disable global-require */
  ...require('./node_modules/@detaprotocol/node-service-base-dev/jest.config'),
  name: 'starkex-lib',
};
