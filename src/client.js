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

        /**
         * 
         * PieceCid: {
                                "/": pieceCID,
                            },
                            PieceSize: fc.utils.calculatePaddedSize(size),
         */

        startDeal: function (CID, wallet, miner, pieceCID, size, duration=518400) {
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
                        EpochPrice: "500",
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