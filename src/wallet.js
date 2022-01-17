
function createWallet(fc) {
    return {

        balance: function (address) {
            return new Promise((resolve, reject) => {
                fc.postJSON(method="Filecoin.WalletBalance", params=[address]).then(resolve).catch(reject);
            });
        },

        list: function () {
            return new Promise((resolve, reject) => {
                fc.postJSON(method="Filecoin.WalletList", params=[]).then(resolve).catch(reject);
            });
        },

        new: function () {
            return new Promise((resolve, reject) => {
                fc.postJSON(method="Filecoin.WalletNew", params=["bls"]).then(resolve).catch(reject);
            });
        },

        defaultAddress: function () {
            return new Promise((resolve, reject) => {
                fc.postJSON(method="Filecoin.WalletDefaultAddress", params=[]).then(resolve).catch(reject);
            });
        },

        delete: function (address) {
            return new Promise((resolve, reject) => {
                fc.postJSON(method="Filecoin.WalletDelete", params=[address]).then(resolve).catch(reject);
            });
        },

        export: function (address) {
            return new Promise((resolve, reject) => {
                fc.postJSON(method="Filecoin.WalletExport", params=[address]).then(resolve).catch(reject);
            });
        },

        has: function (address) {
            return new Promise((resolve, reject) => {
                fc.postJSON(method="Filecoin.WalletHas", params=[address]).then(resolve).catch(reject);
            });
        },

        import: function (privateKey) {
            return new Promise((resolve, reject) => {
                fc.postJSON(method="Filecoin.WalletImport", params=[{Type: "bls", PrivateKey: privateKey}]).then(resolve).catch(reject);
            });
        },

        setDefault: function (address) {
            return new Promise((resolve, reject) => {
                fc.postJSON(method="Filecoin.WalletSetDefault", params=[address]).then(resolve).catch(reject);
            });
        },

        sign: function (address, data) {
            return new Promise((resolve, reject) => {
                fc.postJSON(method="Filecoin.WalletSign", params=[address, data]).then(resolve).catch(reject);
            });
        },

        signMessage: function (address, message) {
            return new Promise((resolve, reject) => {
                fc.postJSON(method="Filecoin.WalletSignMessage", params=[address, message]).then(resolve).catch(reject);
            });
        },

        validateAddress: function (address) {
            return new Promise((resolve, reject) => {
                fc.postJSON(method="Filecoin.WalletValidateAddress", params=[address]).then(resolve).catch(reject);
            });
        },

        verify: function (address, signature, data) {
            return new Promise((resolve, reject) => {
                fc.postJSON(method="Filecoin.WalletVerify", params=[address, signature, {Type: 2, Data: data}]).then(resolve).catch(reject);
            });
        }

    };


    
}



module.exports = createWallet;