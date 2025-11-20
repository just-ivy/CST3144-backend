const mongoose = require('mongoose');
const PropertiesReader = require('properties-reader');
const properties = PropertiesReader('dbconnection.properties');

const dbPrefix = properties.get('db.prefix');
const dbHost = properties.get('db.host');
const dbName = properties.get('db.name');
const dbUser = properties.get('db.user');
const dbPassword = properties.get('db.password');
const dbParams = properties.get('db.params');

const uri = `${dbPrefix}://${dbUser}:${dbPassword}@${dbHost}/${dbName}?${dbParams}`;

function connectDB() {
    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Connected to MongoDB Atlas"))
    .catch(err => console.error("MongoDB connection error:", err));
}

module.exports = connectDB;
