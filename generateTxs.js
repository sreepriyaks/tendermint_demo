const config = require('./const');
const makeRequest = require('./common').makeRequest;


var i, key, value;
for (i = 0; i < 100; i++) {
    key = `Key${getRandomInt(77437)}`;
    value = `Value${getRandomInt(26346)}`;
    tx = `${key}=${value}`;
    console.log(`${config.tx_baseUrl}"${tx}"`);
    makeRequest(`${config.tx_baseUrl}"${tx}"`)
    .then(result => {
        console.log(result);
    })
    .catch(err => {
        console.log(err);
    })
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}