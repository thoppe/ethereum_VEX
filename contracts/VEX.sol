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

  function network_subtract(int x, int y) public {
    result(subtract(x,y));
  }
  
  function network_multiply(int x, int y) public {
    result(multiply(x,y));
  }
  
}
