// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/presets/ERC20PresetFixedSupply.sol";

contract CustomERC20 is ERC20PresetFixedSupply {
    constructor(string memory name, string memory symbol, uint256 initialSupply, address owner)
    ERC20PresetFixedSupply(name, symbol, initialSupply, owner) {}
}
