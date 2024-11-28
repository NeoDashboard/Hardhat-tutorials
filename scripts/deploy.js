async function main() {
  const HelloWorld = await ethers.getContractFactory("HelloWorld")
  // Start deployment, returning a promise that resolves to a contract object
  const hello_world = await HelloWorld.deploy("Hello World!")
  console.log(hello_world)
  console.log("Contract deployed to address:", hello_world.target)
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })