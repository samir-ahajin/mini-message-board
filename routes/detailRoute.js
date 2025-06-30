const express = require('express');
const DetailRouter = express.Router();

const detailController = require('../controller/detailController')
DetailRouter.get('/:id',detailController.dataUpdate)

module.exports = DetailRouter