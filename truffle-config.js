const path = require("path");

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    develop: {
      host:"127.0.0.1",
      port: 7545,
      network_id:"5777",
      websockets: true
    }
  },
  compilers: {
    solc: {
      version: "0.8.7"  // 여기에 필요한 Solidity 버전을 설정
    }
  }
};
