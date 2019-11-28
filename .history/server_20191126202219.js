const express = require('express');
const app = express();

const port = 5000;
const mongoose = require ('mongoose');

mongoose.connect("mongodb+srv://movies-api-app:movies-api-app@movies-api-app-wtaig.mongodb.net/test?retryWrites=true&w=majority",
{useUnifiedTopology: true, useNewUrlParser: true}
);

// app.get('/api/movies', (req, res) => {
//     const movies = [
//         {id: 1, title: 'Titanic', year: '1996'},
//         {id: 2, title: 'The best', year: '2000'},
//         {id: 3, title: 'Panic room', year: '2019'}
//     ]
//     res.json(movies);
// });


app.listen(port, () => console.log(`Server started on port ${port}`));