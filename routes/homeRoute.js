const express = require('express');
const HomeRouter = express.Router();

const homeController = require('../controller/homeController')
HomeRouter.get('/',homeController.getData)

module.exports = HomeRouter




