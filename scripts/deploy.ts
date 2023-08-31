import { ethers } from "hardhat";
import {CustomERC20__factory} from "../typechain-types";

async function main() {
  const initAmount = 10000000;
  const [owner] = await ethers.getSigners();
  const tokenList = ["DAI", "USDC", "USDT", "WBTC", "WETH", "LINK", "AAVE"];
  const contractFactory: CustomERC20__factory = await ethers.getContractFactory("CustomERC20");
  for (const token of tokenList) {
    let contract = await contractFactory.deploy(token, token, initAmount, owner);
    console.log(
        `deploy ${token} contract to address ${contract.target}; ${owner.address} has ::q:init amount ${initAmount}`
    );
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
