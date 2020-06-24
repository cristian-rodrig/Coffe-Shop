const mysql = require("mysql");

function getEnvSetup(){
    var envSetup = {
        connectionLimit: 10,
        host: "localhost",
        user: "coffeeadmin",
        password: "c0ff334d",
        database: "coffeeShop"
    };
    return envSetup;
}

const connection = mysql.createPool(getEnvSetup());
module.exports = {connection};
