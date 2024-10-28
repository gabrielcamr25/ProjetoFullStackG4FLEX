const mysql = require('mysql');
require('dotenv').config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD ,
  database: process.env.DB_DATABASE
}) 

db.connect(err => {
  if(err){
    console.log("erro ao conectar ao banco", err);
  } 
  console.log("Conectado ao banco de dados")
});
module.exports = db;