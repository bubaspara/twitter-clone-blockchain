require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.2",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/0hSf5rv9zcCb60oLaZVo0vohYA8pIYI0",
      accounts: [
        "70dcb1918708ee2ad96e9d9ef633ad9ca5f35373214c71d9a6132f86eeace915",
      ],
    },
  },
};
