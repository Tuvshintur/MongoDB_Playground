const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;
const mongoDbUrl = "mongodb://localhost:27017/shop?retryWrites=true";

let _db;

const initDb = (callback) => {
    if (_db) {
        console.log("Database is already initialized!");
        return callback(null, _db);
    }
    MongoClient.connect(mongoDbUrl)
        .then((client) => {
            _db = client;
            callback(null, _db);
        })
        .catch((err) => {
            callback(err);
        });
};

const getDb = () => {
    if (!_db) {
        throw Error("Database not initialzed");
    }
    return _db;
};

module.exports = {
    initDb,
    getDb,
};
