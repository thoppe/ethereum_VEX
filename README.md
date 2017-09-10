VEX is a Very EXpensive calculator built as a smart-contract on the Etherium blockchain. It is a proof-of-concept to show that arbitrary computations can be run on the blockchain by external computers (if you're willing to pay for it).

### Install the webpackage

    npm install lite-server

### Setup on stock Ubuntu

    # Basic dependencies
    sudo apt-get install git build-essential

    # install nvm
    sudo curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.4/install.sh | bash

    # Install nodejs/npm
    nvm install 5.3.0

    # Install ethereum dependices
    npm install -g ethereumjs-testrpc
    npm install -g truffle