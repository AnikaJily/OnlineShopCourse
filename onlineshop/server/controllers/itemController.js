const uuid = require('uuid')
const path = require('path')
const {Item} = require('../models/models')
const ApiError = require('../error/ApiError')


class ItemController {
    async create(req, res, next) {
        try {
            const {name, price, categoryId, typeId, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
    
            const item = await Item.create({name, price, categoryId, typeId, img: fileName})
    
            return res.json(item)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        const {categoryId, typeId} = req.query
        let items;
        if (!categoryId && !typeId) {
            items = await Item.findAll()
        }
        if (categoryId && !typeId) {
            items = await Item.findAll({where: {categoryId}})
        }
        if (!categoryId && typeId) {
            items = await Item.findAll({where: {typeId}})
        }
        if (categoryId && typeId) {
            items = await Item.findAll({where: {typeId, categoryId}})
        }
        return res.json(items)
    }

    async getOne(req, res) {

    }

}

module.exports = new ItemController()