pragma solidity ^0.4.4;

contract VEX {

  event result(int _value);

  function add(int x, int y) constant public returns (int) {
    return x+y;
  }

  function subtract(int x, int y) constant public returns (int) {
    return x-y;
  }

  function multiply(int x, int y) constant public returns (int) {
    return x*y;
  }

  function network_add(int x, int y) public {
    result(add(x,y));
  }
  

}
