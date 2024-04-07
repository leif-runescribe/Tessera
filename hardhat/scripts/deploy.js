const hre = require("hardhat");

async function main() {
  // make sure to change the name of your contract
  const Pizza = await hre.ethers.getContractFactory("RealEstate");
  // 4 in the bracket is to give the value to the parameter(_pizzaSize) in the constructor of the smart contract contract.
  const pizza = await Pizza.deploy();

  await pizza.deployed();

  console.log("pizza contract address:", pizza.address);
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });