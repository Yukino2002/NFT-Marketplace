require("@nomiclabs/hardhat-waffle");

const fileService = require("fs");
const privateKey = fileService.readFileSync(".secret").toString();
const projectId = "f1d62f88984f452485f294cb4628f4d6";

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    auroraTestnet: {
      url: `https://aurora-testnet.infura.io/v3/${projectId}`,
      accounts: [privateKey]
    },
    auroraMainnet: {
      url: `https://aurora-mainnet.infura.io/v3/${projectId}`,
      accounts: [privateKey]
    }
  },
  solidity: "0.8.4",
};
