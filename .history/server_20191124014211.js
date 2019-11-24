const express = require('express');
const app = express();

const port = 5000;

app.get('/api/movies', (req, res) => {
    const movies = [
        {id: 1, title: 'Titanic', year: '1996'},
        {id: 2, title: 'The best', year: '2000'},
        {id: 3, title: 'Panic room', year: '2019'}
    ]
});

res.json(movies);

app.listen(port, () => console.log(`Server started on port ${port}`));