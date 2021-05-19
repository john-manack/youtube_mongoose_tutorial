const express = require('express');
const router = express.Router();
const Post = require('../models/PostsModel');

// Get back all posts
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find({});
        res.json(posts);
    } catch (err) {
        res.json( {message: err } );
    }
});

// Get a specific post
router.get('/:postId', async (req, res) => {
    const { postId } = req.params;
    try {
        const posts = await Post.findOne({ _id: postId });
        res.json(posts);
    } catch (err) {
        res.json( {message: err } );
    }
});

// Post a submission
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch(err) {
        res.json({ message: err })
    }
});

// Delete a post
router.delete('/:postId', async (req, res) => {
    const { postId } = req.params;
    try {
        const deletedPost = await Post.deleteOne({ _id: postId });
        res.json(deletedPost);
    } catch(err) {
        res.json({ error_message: err })
    }
});

// Patch (update) a post
router.patch('/:postId', async (req, res) => {
    const { postId } = req.params;
    try {
        const updatedPost = await Post.updateOne(
        {
            _id: postId
        },{ 
            title: req.body.title,
            description: req.body.description
        });
        res.json(updatedPost);
    } catch(err) {
        res.json({ error_message: err })
    }
})

module.exports = router;