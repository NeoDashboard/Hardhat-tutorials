async function main() {
    const contractAddress = "0x769427b5A043b4aB2f4c31A7Da819526F3B0d181";
    const helloWorldContract = await hre.ethers.getContractAt("HelloWorld", contractAddress);

    const tx = await helloWorldContract.update("NeoX is the best chain.")
    await tx.wait()
    console.log("Changing the message on transaction:", tx.hash);

}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });