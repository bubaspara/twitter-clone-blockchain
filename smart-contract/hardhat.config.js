require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.2",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/0hSf5rv9zcCb60oLaZVo0vohYA8pIYI0",
      accounts: [""],
    },
  },
};
