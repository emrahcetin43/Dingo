require('dotenv').config();
const tokenStr = process.env.AUTH_TOKEN;
const axios = require('axios');


function postJSON(method, rpc, params = null) {
    return new Promise((resolve, reject) => {
        let push = {
            headers: {"Authorization" : `Bearer ${tokenStr}`},
            method: 'post',
            url: rpc,
            data: {
                jsonrpc: "2.0",
                method: method,
                id: 1,
                params: params
            }
        };

        // console.log(JSON.stringify(push, null, 4));

        axios(push).then((r) => {
            resolve(r.data);
        }).catch((err) => {
            reject(err);
        });
    });
}

const Network = {postJSON: postJSON};

module.exports = Network;