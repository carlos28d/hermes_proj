/*const winston = require('winston');
const mongoose = require('mongoose');

module.expots = function() {

  const url = `mongodb://vidlyuser:1234@vidly-shard-00-00.ciztg.mongodb.net:27017,vidly-shard-00-01.ciztg.mongodb.net:27017,vidly-shard-00-02.ciztg.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-7a2v8y-shard-0&authSource=admin&retryWrites=true&w=majority`;


  mongoose.connect(url)
    .then(() => winston.info(`Connected to ${url}...`));
} */

const winston = require('winston');
const mongoose = require('mongoose');
const config = require('config');

module.exports = function() {
  const db = config.get('db');
  mongoose.connect(db)
    .then(() => winston.info(`Connected to ${db}...`));
}