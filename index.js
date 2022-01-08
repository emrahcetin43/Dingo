require("dotenv").config();

const createWallet = require('./src/wallet');
const createClient = require('./src/client');
const utils = require('./src/utils');
const network = require('./src/network');


let FileCoin = {
    endpoint: 'http://127.0.0.1:1234/rpc/v0',
    postJSON: function (method, params = null) {
        return new Promise((resolve, reject) => {
            network.postJSON(method, this.endpoint, params).then(resolve).catch(reject);
        });
    },
};


FileCoin.client = createClient(FileCoin);
FileCoin.wallet = createWallet(FileCoin);

FileCoin.utils = utils;

FileCoin.version = () => {
    return new Promise((resolve, reject) => {
        postJSON(method="Filecoin.Version").then(resolve).catch(reject);
    });
};

FileCoin.setRPC = function (rpc) {
    this.endpoint = rpc;
}




module.exports = FileCoin;

