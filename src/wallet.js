
function createWallet(fc) {
    return {

        balance: function () {
            return new Promise((resolve, reject) => {
                fc.postJSON(method="Filecoin.WalletBalance", params=["t1jdlfl73voaiblrvn2yfivvn5ifucwwv5f26nfza"]).then(resolve).catch(reject);
            });
        }

    };


    
}



module.exports = createWallet;