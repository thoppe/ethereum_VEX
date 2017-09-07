### Install truffle on Ubuntu

    # Remove crusty apt version
    sudo apt remove node nodejs nodejs-legacy npm

    # Install basics
    sudo apt-get install git build-essential

    # Get nvm
    wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.4/install.sh | bash
    
    # Restart terminal and install nodejs
    nvm install 8.4.0
    npm install -g ethereumjs-testrpc
    npm install -g truffle

    