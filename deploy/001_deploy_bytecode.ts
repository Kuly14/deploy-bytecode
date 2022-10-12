import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const deployDeployBytecode: DeployFunction = async function (
  hre: HardhatRuntimeEnvironment
) {
  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;

  const { deployer } = await getNamedAccounts();
  await deploy("DeployBytecode", {
    from: deployer,
    args: [],
    log: true,
  });
};
export default deployDeployBytecode;
deployDeployBytecode.tags = ["all"];
