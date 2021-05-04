// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "../node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Dai is ERC20 {
    constructor() public ERC20("Dai Stablecoin", "DAI") {}

    function faucet(address to, uint256 amount) public {
        _mint(to, amount);
    }
}
