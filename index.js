const contractABI = require("./build/contracts/CuizzineWebOrder.json").abi;
const contractAddress = "0xB5f27C0bdDb6F8ef810f919284745a075BfB5adD";
const web3Provider = "http://localhost:7545";

(async function myApp({ contractABI, contractAddress, web3Provider }) {
    const Web3 = require("web3");
    const myWeb3 = new Web3(web3Provider);
    const myContract = await new myWeb3.eth.Contract(contractABI, contractAddress);
    const [customerWalletAddress, restaurantWalletAddress] = await myWeb3.eth.getAccounts();

    console.log({ customerWalletAddress, restaurantWalletAddress });

    const myWebOrder = {
        customerWalletAddress,
        restaurantWalletAddress,
        order_id: "XEO1reMLnJhlf7JcZNJB",
        customer_id: "UUCzbG5zdZ6VS4oPQyJK",
        restaurant_id: "8KbG1mFLeCMGSDZyEnL4",
        totalETH: 0.10082464543958122
    };

}({
    contractABI,
    contractAddress,
    web3Provider
}));
