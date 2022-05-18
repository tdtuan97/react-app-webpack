const helpers = {
    getEndPointAPI: function () {
        return process.env.REACT_APP_API_ENDPOINT
    },

    formatCash: function (value, currency = 'VNĐ') {
        value = value.toString();
        return value.split('').reverse().reduce((prev, next, index) => {
            return ((index % 3) ? next : (next + ',')) + prev
        }) + ' ' + currency
    }
}
export default helpers;
