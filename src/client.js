function createClient(fc) {
    return {
        import: function (path) {
            return new Promise((resolve, reject) => {
                fc.postJSON(method="Filecoin.ClientImport", params=[{Path: path, IsCAR: false}]).then((data) => {
                    return resolve(data);
                }).catch((e) => {
                    return reject(e);
                });
            });
        },

        listImports: function () {
            return new Promise((resolve, reject) => {
                fc.postJSON(method="Filecoin.ClientListImports", params=[]).then((data) => {
                    return resolve(data);
                }).catch((e) => {
                    return reject(e);
                });
            });
        },

        genCar: function (path) {
            return new Promise((resolve, reject) => {
                fc.postJSON(method="Filecoin.ClientGenCar", params=[{Path: path, IsCAR: true}, path + ".car"]).then((data) => {
                    return resolve(data);
                }).catch((e) => {
                    return reject(e);
                });
            });
        },

        dealSize : function (CID) {
            return new Promise((resolve, reject) => {
                fc.postJSON(method="Filecoin.ClientDealSize", params=[
                    {
                        "/": CID,
                    }
                ]).then(resolve).catch(reject);
            });
        },

        /**
         * Calcualted the CommP from some string. The Lotus docs don't tell us what string.
         * @deprecated Do not use. The Lotus Docs don't cover this method enough to make a working endpoint call.
         * @param {string} CID 
         * @returns Promise
         */
        calcCommP  : function (CID) {
            return new Promise((resolve, reject) => {
                fc.postJSON(method="Filecoin.ClientCalcCommP ", params=[
                    CID,
                ]).then(resolve).catch(reject);
            });
        },

        dealPieceCID : function (CID) {
            return new Promise((resolve, reject) => {
                fc.postJSON(method="Filecoin.ClientDealPieceCID", params=[
                    {
                        "/": CID,
                    }
                ]).then(resolve).catch(reject);
            });
        },

        getDealStatus : function (id) {
            return new Promise((resolve, reject) => {
                fc.postJSON(method="Filecoin.ClientGetDealStatus", params=[
                    id
                ]).then(resolve).catch(reject);
            });
        },

        getDealUpdates : function () {
            return new Promise((resolve, reject) => {
                fc.postJSON(method="Filecoin.ClientGetDealUpdates", params=[]).then(resolve).catch(reject);
            });
        },

        listDeals : function () {
            return new Promise((resolve, reject) => {
                fc.postJSON(method="Filecoin.ClientListDeals", params=[]).then(resolve).catch(reject);
            });
        },

        startDeal: function (CID, wallet, miner, pieceCID, size, price=1000, duration=518400) {
            return new Promise((resolve, reject) => {
                fc.postJSON(method="Filecoin.ClientStartDeal", params=[
                    {
                        Data: {
                            TransferType: "graphsync",
                            Root: {
                                "/": CID
                            },
                            PieceCid: null ,//{
                            //     "/": pieceCID
                            // },
                            PieceSize: size,
                            RawBlockSize: 0,
                            
                        },
                        Wallet: wallet,
                        Miner: miner,
                        EpochPrice: String(price),
                        MinBlocksDuration: duration,
                        ProviderCollateral: "0",
                        DealStartEpoch: -1,
                        FastRetrieval: true,
                        VerifiedDeal: false
                    }
                ]).then(resolve).catch(reject);
            })
        }
    }

}

module.exports = createClient;