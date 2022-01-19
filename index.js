require("dotenv").config();

const createWallet = require('./src/wallet');
const createClient = require('./src/client');
const utils = require('./src/utils');
const network = require('./src/network');


let FileCoin = {
    endpoint: 'http://127.0.0.1:1234/rpc/v0',
    setRPC: function (rpc) {
        this.endpoint = rpc;
    },
    postJSON: function (method, params = null) {
        return new Promise((resolve, reject) => {
            network.postJSON(method, this.endpoint, params).then(resolve).catch(reject);
        });
    },
    version: function () {
        return new Promise((resolve, reject) => {
            this.postJSON(method="Filecoin.Version").then(resolve).catch(reject);
        });
    },
    
    shutdown: function () {
        return new Promise((resolve, reject) => {
            this.postJSON(method="Filecoin.Shutdown").then(resolve).catch(reject);
        });
    },
    
    discover: function () {
        return new Promise((resolve, reject) => {
            this.postJSON(method="Filecoin.Discover").then(resolve).catch(reject);
        });
    },
};


FileCoin.client = createClient(FileCoin);
FileCoin.wallet = createWallet(FileCoin);

FileCoin.utils = utils;






module.exports = FileCoin;

