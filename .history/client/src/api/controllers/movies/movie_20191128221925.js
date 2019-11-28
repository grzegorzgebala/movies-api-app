const MovieProduct = require('../../models/movieProduct');

module.exports = {
    // Method to create new object
    create : async (req, res) =>{

        // Prepared movie object for send to Data Base
        const { title, year, poster } = req.body;
        const movie = await MovieProduct.create({
            title,
            year,
            poster
        })

        return res.send(movie)
    },
    // Method prepared to find movies in Data Base
    find : async (req, res) => {
        const movieProduct = await MovieProduct.find()
        return res.send(movieProduct)
    },
}
