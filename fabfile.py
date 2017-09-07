from fabric.api import local

def build():
    local("truffle compile")
