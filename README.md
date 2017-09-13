VEX is a Very EXpensive calculator built as a smart-contract on the Etherium blockchain. It is a proof-of-concept to show that arbitrary computations can be run on the blockchain by external computers (if you're willing to pay for it). The contract is deployed on the mainnet at the address

(0x4f5a4501f96cb95eEDA376F4caa0B24F4dbBD796)[https://etherscan.io/address/0x4f5a4501f96cb95eeda376f4caa0b24f4dbbd796]

!()[docs/Screenshot_demo.png]

### Run the webserver

    npm run dev

### Setup on stock Ubuntu

    # Basic dependencies
    sudo apt-get install git build-essential

    # install nvm
    sudo curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.4/install.sh | bash

    # Install nodejs/npm
    nvm install 8

    # Install ethereum dependices
    npm install -g ethereumjs-testrpc
    npm install -g truffle


    # Install the webpackage locally
    npm install lite-server

    # Install metamask