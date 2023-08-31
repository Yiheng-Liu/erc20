import { expect } from "chai";
import { ethers } from "hardhat";
import { HardhatEthersSigner } from "@nomicfoundation/hardhat-ethers/signers"
import {CustomERC20, CustomERC20__factory} from "../typechain-types";

describe("ERC20PresetMinterPauser", async () => {
  let owner: HardhatEthersSigner;
  let addr2: HardhatEthersSigner;
  let DAI: CustomERC20;
  const init = 10000000;

  beforeEach(async () => {
    [owner, addr2] = await  ethers.getSigners();
    const contractFactory: CustomERC20__factory = await ethers.getContractFactory("CustomERC20");
    DAI = await contractFactory.deploy("DAI", "DAI", init, owner.address);
  })

  it("mint some token", async () => {
    const balance = await DAI.balanceOf(owner);
    expect(balance).to.be.equals(init);
  })
})