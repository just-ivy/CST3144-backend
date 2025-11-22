const { MongoClient } = require('mondodb');
const PropertiesReader = require('properties-reader');
const properties = PropertiesReader('dbconnection.properties');

const dbPrefix = properties.get('db.prefix');
const dbHost = properties.get('db.host');
const dbName = properties.get('db.name');
const dbUser = properties.get('db.user');
const dbPassword = properties.get('db.password');
const dbParams = properties.get('db.params');

const uri = `${dbPrefix}://${dbUser}:${dbPassword}@${dbHost}/${dbName}?${dbParams}`;

let db = null;

async function connectDB() {
    if (db) return db;

    const client = new MongoClient(uri);
    await client.connect();
    console.log("Connected to MongoDB using native driver");

    db = client.db(dbName);
    return db;
}

module.exports = connectDB;

