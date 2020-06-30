// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.7.0;
pragma experimental ABIEncoderV2;

import "../lib/safemath.sol";

contract CuizzineWebOrder {
    //constructor() public {}

    event ReceivedWebOrder(
        string order_id,
        string restaurant_id,
        string customer_id,
        uint256 totalETH
    );

    struct WebOrder {
        string order_id;
        string customer_id;
        string restaurant_id;
        address customerWalletAddress;
        address restaurantWalletAddress;
        uint256 totalETH;
    }

    function createOrder(WebOrder memory _myWebOrder) public {
        emit ReceivedWebOrder(
            _myWebOrder.order_id,
            _myWebOrder.customer_id,
            _myWebOrder.restaurant_id,
            _myWebOrder.totalETH
        );
    }
}
