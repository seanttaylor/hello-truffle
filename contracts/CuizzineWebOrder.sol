// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.7.0;
pragma experimental ABIEncoderV2;

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

    function createOrder(uint256 order_id)
        public
        view
        returns (uint256)
    /*string memory order_id,
        string memory customer_id,
        string memory restaurant_id,
        uint256 totalETH*/
    {
        return order_id;
        //emit ReceivedWebOrder(order_id, customer_id, restaurant_id, totalETH);
        //emit ReceivedWebOrder();
    }
}
