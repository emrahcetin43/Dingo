let Client = {};

Client.import = (path) => {
    return new Promise((resolve, reject) => {
        this.postJSON(method="Filecoin.ClientImport", params=[{Path: path, IsCAR: false}]).then((data) => {
            return resolve(data);
        }).catch((e) => {
            return reject(e);
        });
    });
}

module.exports = Client;