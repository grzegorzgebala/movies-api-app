const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const movieOrders = require('./client/src/api/routes/movieOrders');


app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connection to DB mongoDB : Atlas
mongoose.connect("mongodb+srv://movies-api-app:movies-api-app@movies-api-app-wtaig.mongodb.net/test?retryWrites=true&w=majority",{
    useUnifiedTopology: true, 
    useNewUrlParser: true
});

// Confirmation of DB connection
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Mongo connection established');
});

// routes included in movieOrders
app.use('/movies', movieOrders);
const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
