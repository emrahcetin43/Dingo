require("dotenv").config();
const axios = require('axios');

const Wallet = require('./src/wallet');
const Client = require('./src/client');

const {postJSON} = require('./src/network');


let FileCoin = {endpoint: 'http://127.0.0.1:1234/rpc/v0'};

FileCoin.client = Client;
FileCoin.wallet = Wallet;

FileCoin.version = () => {
    return new Promise((resolve, reject) => {
        postJSON(method="Filecoin.Version").then(resolve).catch(reject);
    });
};

FileCoin.setRPC = (rpc) => {
    this.endpoint = rpc;
}




module.exports = FileCoin;

