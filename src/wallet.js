let Wallet = {};

Wallet.balance = () => {
    return new Promise((resolve, reject) => {
        this.postJSON(method="Filecoin.WalletBalance", params=["t1jdlfl73voaiblrvn2yfivvn5ifucwwv5f26nfza"]).then(resolve).catch(reject);
    });
};

module.exports = Wallet;