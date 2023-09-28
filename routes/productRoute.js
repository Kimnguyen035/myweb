const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();

const urlParent = (app) => {
    router.get('/get-all-product', productController.get_todo);

    return app.use('/api/', router);
}

module.exports = {
    urlParent
}