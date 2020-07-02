/** DEPENDENCIES */
const contractABI = require("./build/contracts/CuizzineWebOrder.json").abi;
const contractAddress = "0xB5f27C0bdDb6F8ef810f919284745a075BfB5adD";


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
        //totalETH: 0.10082464543958122
        totalETH: myWeb3.utils.toWei("0.10082464543958122")

    };

    try {
        const result = await myContract.methods.createOrder(1).call();
        // await myContract.methods.createOrder("goo"/*myWebOrder.customer_id, myWebOrder.restaurant_id, myWebOrder.totalETH*/).call();
        // myContract.events.ReceivedWebOrder()
        //    .on("data", onReceivedWebOrder)
        //    .on("error", onError);
    } catch (e) {
        console.info("Ensure you are CONNECTED to a test network. If using Ganache, verify the workspace is configured properly.")
        onError(e);
    }


    function onReceivedWebOrder(data) {
        console.info(data);
    }

    function onError(error) {
        console.error(error);
    }

}({
    contractABI,
    contractAddress
}));
