const CuizzineWebOrder = artifacts.require("../contracts/CuizzineWebOrder.sol");

module.exports = function (deployer) {
    deployer.deploy(CuizzineWebOrder);
};
