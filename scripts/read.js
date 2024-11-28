async function main() {
    const contractAddress = "0x769427b5A043b4aB2f4c31A7Da819526F3B0d181";
    const helloWorldContract = await hre.ethers.getContractAt("HelloWorld", contractAddress);

    const message = await helloWorldContract.message()

    console.log("Message is:", message);

}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });