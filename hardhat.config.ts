import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  defaultNetwork: "hardhat",
  networks: {
    axiomesh: {
      url: "http://localhost:8881",
      chainId: 1356,
      accounts: [
        "b6477143e17f889263044f6cf463dc37177ac4526c4c39a7a344198457024a2f",
        "05c3708d30c2c72c4b36314a41f30073ab18ea226cf8c6b9f566720bfe2e8631",
        "85a94dd51403590d4f149f9230b6f5de3a08e58899dcaf0f77768efb1825e854",
        "72efcf4bb0e8a300d3e47e6a10f630bcd540de933f01ed5380897fc5e10dc95d"
      ]
    },
  }
};

export default config;
