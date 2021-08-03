require('@nomiclabs/hardhat-waffle');
require('@nomiclabs/hardhat-solhint');
require('hardhat-docgen');

const secret = require('./secret');
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: '0.8.5',
  networks: {
    bscTestnet: {
      url: secret.url,
      chainId: 97,
      gasPrice: 20000000000,
      accounts: [secret.key],
      // testnet link: https://testnet.bscscan.com/
    },
  },
  docgen: {
    path: './docs',
    clear: true,
    runOnCompile: true,
  },
};
