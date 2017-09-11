from fabric.api import local

def build():
    local("truffle compile")

def test():
    local("truffle test")

def serve():
    local("cp -rf build/contracts docs/")
    local("npm run dev")
