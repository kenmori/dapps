const hre = require("hardhat");

const deploy = async () => {
  const Transactions = await hre.ethers.getContractFactory("Transactions");
  const transactions = await Transactions.deploy();

  await lock.deployed();

  console.log(
    `transactions with 1 ETH and unlock timestamp deployed to ${transactions.address}`
  );
}
const runDeploy = async () => {
  try {
    await deploy()
    process.exit(0)
  } catch(e){
    console.log(e)
    process.exit(1)
  }
}
runDeploy()