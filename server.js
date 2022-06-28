const express = require('express')
const app = express()
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()

let db, 
    dbConnectionString = process.env.DB_STRING,
    dbName = 'quotes',
    collection

MongoClient.connect(dbConnectionString)
    .then(client => {
        console.log('Connected to database')
        db = client.db(dbName)
        collection = db.collection('quotes')
    })

app.listen(process.env.PORT || PORT,  () => {
    console.log ('Server is running on port')
})