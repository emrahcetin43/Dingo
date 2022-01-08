const utils = {

    daysToBlocks: function (days) {
        return 2788 * days;
    },

    monthsToBlocks: function (months) {
        return 86400 * months;
    },

    calculatePaddedSize: function(size) {
        const x = size;

        const val = Math.ceil(x / 127.0);

        const ret = 127 * Math.pow(2, (Math.ceil(Math.log2(val))));

        console.log(size + ' -> ' + ret);

        return ret;


    },

}


module.exports = utils;