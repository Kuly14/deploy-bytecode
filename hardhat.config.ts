import {HardhatUserConfig} from 'hardhat/types';
import 'hardhat-deploy';
import 'hardhat-deploy-ethers';
import 'solidity-coverage';
import 'hardhat-gas-reporter';

const config: HardhatUserConfig = {
  solidity: {
    version: '0.8.7',
  },
  namedAccounts: {
    deployer: 0,
  },
  paths: {
    sources: 'src',
  },
};
export default config;
