const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router
    .route('/signup')
    .post(userController.createUser)
    .get(userController.createUser);

router
    .route('/login')
    .post(userController.loginUser)
    .get(userController. loginUser);
router
.route('/newsfeed')
.get(userController. getNewsFeed)
.post(userController. postNewsFeed)
.delete(userController.getNewsFeed);


    


module.exports = router;