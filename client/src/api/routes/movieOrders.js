const router = require('express').Router();
let MovieProduct = require('../models/movieProduct');

// route to get data from Data Base
router.route('/').get((req, res) => {
    MovieProduct.find()
    .then(movies => res.json(movies))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Prepared route to add new movie (data passed from API by component search)
router.route('/add').post((req, res) => {
    const title = req.body.title;
    const year = req.body.year;
    const poster = req.body.poster;

    const newMovie = new MovieProduct({
        title,
        year,
        poster,
    });

    newMovie.save()
    .then(() => res.json('Movie added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
