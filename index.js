const categories = require('./routes/categories');;
const express = require('express');
const app = express();
const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/barterTrade")
    .then(() => console.log("connected to database"))
    .catch((err) => console.log("could not connect to the mongodb" + err))


app.use(express.json());
app.use('/api/categories', categories);



const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));