// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.7.0;

import "../lib/safemath.sol";

contract CuizzineWebOrder {
    //constructor() public {}

    /*event ReceivedWebOrder(
        string order_id,
        string restaurant_id,
        string customer_id,
        uint256 totalETH
    );*/

    event ReceivedWebOrder(string order_id);

    struct WebOrder {
        string order_id;
        string customer_id;
        string restaurant_id;
        address customerWalletAddress;
        address restaurantWalletAddress;
        uint256 totalETH;
    }

    function createOrder(string memory order_id) public {
        emit ReceivedWebOrder(order_id);
        //emit ReceivedWebOrder();
    }
}
