const {response_data} = require('../helpers/response')
const Product = require('../models/product')

const get_todo = async (req, res) => {

    const data_show = await Product.find({});
    
    res.status(200).json(
        response_data(data_show)
    )
}

module.exports = {
    get_todo
}