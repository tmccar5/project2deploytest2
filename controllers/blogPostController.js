const express = require('express')
const router = express.Router()

// const { BlogPost } = require('../models')
const MongoBlogPostModel = require('../models/blogPostMongoose');

router.get('/', async (req,res) => {
    console.log('WE HIT /blog route!!!')
    const allPosts = await MongoBlogPostModel.find()
    res.json(allPosts)
});

router.post('/', async (req,res) => {
    console.log('req.body!!', req.body);
    const savedPost = await MongoBlogPostModel.create(req.body);
    res.json(savedPost);
});

router.get('/single', (req, res) => {
    res.json({message: 'single route test'});
});

router.post('/test', (req, res) => {
    res.json({message: 'route test'});
});

module.exports = router