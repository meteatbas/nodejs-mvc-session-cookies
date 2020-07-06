const express = require('express');

const authController = require('../controllers/auth');

const router = express.Router();

router.get('/login', authController.getLogin);

router.post('/login', authController.postLogin);//instead we use controller

router.post('/logout', authController.postLogout);//instead we use controller

module.exports = router;