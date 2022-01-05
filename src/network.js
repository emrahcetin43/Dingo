function postJSON(method, rpc, params = null) {
    return new Promise((resolve, reject) => {
        axios({
            method: 'post',
            url: rpc,
            data: {
                jsonrpc: "2.0",
                method: method,
                id: 1,
                params: params
            }
        }).then((r) => {
            resolve(r.data);
        }).catch((err) => {
            reject(err);
        });
    });
}

const Network = {postJSON: postJSON};

module.exports = Network;