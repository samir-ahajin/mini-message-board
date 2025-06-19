const express = require('express');
const NewRouter = express.Router();

const newController = require('../controller/newController');
NewRouter.get('/', newController.get);

 NewRouter.post('/', newController.post);


module.exports = NewRouter