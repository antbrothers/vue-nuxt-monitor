var listService = require('../services/listService')

module.exports = {
    'GET /api/getRed': async(req, res, next) => {
        res.rest({
            products: listService.getList
        })
    }
}