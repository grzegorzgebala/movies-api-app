const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();


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

const movieOrders = require('./client/src/api/routes/movieOrders');
// const usersRouter = require('./routes/users');

app.use('/movies', movieOrders);
// app.use('/users', usersRouter);
// app.use(require('./client/routes'))
const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));


// app.get('/api/movies', (req, res) => {
    //     const movies = [
    //         {id: 1, title: 'Titanic', year: '1996'},
    //         {id: 2, title: 'The best', year: '2000'},
    //         {id: 3, title: 'Panic room', year: '2019'}
    //     ]
    //     res.json(movies);
    // });