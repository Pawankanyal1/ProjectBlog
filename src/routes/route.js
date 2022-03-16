const express = require('express');

const router = express.Router();

const authorController = require('../controllers/authorController');
const blogController = require('../controllers/blogController')
const Auth = require('../middlewares/Auth')
// Author routes
router.post('/authors', authorController.registerAuthor);
router.post('/login', authorController.loginAuthor);

// Blog routes
router.post('/blogs', Auth, blogController.createBlog);
router.get('/blogs', Auth, blogController.listBlog);
router.put('/blogs/:blogId', Auth, blogController.updateBlog);
router.delete('/blogs/:blogId', Auth, blogController.deleteBlogByID);
router.delete('/blogs', Auth, blogController.deleteBlogByParams);

module.exports = router;