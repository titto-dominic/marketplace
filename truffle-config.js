require('babel-register');
require('babel-polyfill');

module.exports = {
  networks: {
    development: {
      host: "http://18.223.168.82/",
      port: 30545,
      network_id: "*" // Match any network id
    },
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}
