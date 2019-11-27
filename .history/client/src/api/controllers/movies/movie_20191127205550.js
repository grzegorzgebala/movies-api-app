const MovieProduct = require('../../models/movieProduct');

module.exports = {
    create : async (req, res) =>{
        // const { name, bio, website } = req.body;
        const movieProduct = await MovieProduct.create({
            title,
            year,
            poster
        })

        return res.send(movieProduct)
    },

    find : async (req, res) => {
        const movieProduct = await MovieProduct.find()
        return res.send(movieProduct)
    },
    // postsByUser : async (req, res) => {
    //    const { id } = req.params;
    //    const user = await User.findById(id).populate('posts');

    //     res.send(user.posts);
    // }
}