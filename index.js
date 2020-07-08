/** DEPENDENCIES */
const contractABI = require("./build/contracts/CuizzineWebOrder.json").abi;
const contractAddress = "0x0b82152Cc62e15Bd390649eCe96c170fc7375FBf";

/** APPLICATION */
(async function myApp({ contractABI, contractAddress }) {
    const Web3 = require("web3");
    const myWeb3 = new Web3();
    const wsProvider = new myWeb3.providers.WebsocketProvider("ws://localhost:7545");
    myWeb3.setProvider(wsProvider);
    const myContract = await new myWeb3.eth.Contract(contractABI, contractAddress);
    const [customerWalletAddress, restaurantWalletAddress] = await myWeb3.eth.getAccounts();

    const myWebOrder = {
        customerWalletAddress,
        restaurantWalletAddress,
        order_id: "XEO1reMLnJhlf7JcZNJB",
        customer_id: "UUCzbG5zdZ6VS4oPQyJK",
        restaurant_id: "8KbG1mFLeCMGSDZyEnL4",
        totalETH: myWeb3.utils.toWei("0.10082464543958122")
    };

    try {
        myContract.events.ReceivedWebOrder()
            .on("data", onReceivedWebOrder)
            .on("error", onError);

        const result = await myContract.methods.createOrder(myWebOrder.order_id).send({
            from: customerWalletAddress
        });
        process.exit(0);
    } catch (e) {
        console.warn("⚠️  Ensure you are CONNECTED to a test network. If using Ganache, verify the workspace is configured properly.");
        onError(e);
    }

    function onReceivedWebOrder({ returnValues }) {
        const { order_id } = returnValues;
        console.info(order_id);
    }

    function onError(error) {
        console.error(error);
        process.exit(1);
    }

}({
    contractABI,
    contractAddress
}));
