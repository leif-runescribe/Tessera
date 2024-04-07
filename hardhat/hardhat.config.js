require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const NET_URL = process.env.NET_URL;
const PRIV_KEY = process.env.PRIV_KEY;

module.exports = {
  solidity: "0.8.9",
  networks: {
    xinfin: {
      url: NET_URL,
      accounts: [PRIV_KEY],
    },
  },
};