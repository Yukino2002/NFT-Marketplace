require("@nomiclabs/hardhat-waffle");

const fileService = require("fs");
const privateKey = fileService.readFileSync(".secretAccount").toString();
const projectId = fileService.readFileSync(".secretProject").toString();

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
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${projectId}`,
      accounts: [privateKey]
    }
  },
  solidity: "0.8.4",
};
