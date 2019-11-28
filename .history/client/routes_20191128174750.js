const express = require('express');
const router = new express.Router;
const movieProduct = require('./src/api/controllers/movies/movie');
// const Post = require('./controllers/post/post');

router.get('/',(req,res)=>res.send('ok'));
// user routes
router.post('/movieProduct/create', movieProduct.create);
// router.post('/user/find',User.find);
// router.post('/user/find/post/:id', User.postsByUser);
// post routes
// router.post('/post/create/:id', Post.create);
// router.post('/post/populate/:id',Post.userByPost);

module.exports = router;