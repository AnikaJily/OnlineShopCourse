const uuid = require('uuid')
const path = require('path')
const {Item, ItemInfo} = require('../models/models')
const ApiError = require('../error/ApiError')


class ItemController {
    async create(req, res, next) {
        try {
            let {name, price, categoryId, typeId, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const item = await Item.create({name, price, categoryId, typeId, img: fileName})
            
            if (info) {
                info = JSON.parse(info)
                info.forEach(i =>
                    ItemInfo.create({
                        title: i.title,
                        description: i.description,
                        ItemId: Item.id
                    })
                )
            }

           
    
            return res.json(item)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        let {categoryId, typeId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let Items;
        let items;
        if (!categoryId && !typeId) {
            items = await Item.findAndCountAll({limit, offset})
        }
        if (categoryId && !typeId) {
            items = await Item.findAndCountAll({where: {categoryId}, limit, offset})
        }
        if (!categoryId && typeId) {
            items = await Item.findAndCountAll({where: {typeId}, limit, offset})
        }
        if (categoryId && typeId) {
            items = await Item.findAndCountAll({where: {typeId, categoryId}, limit, offset})
        }
        return res.json(items)
    }

    async getOne(req, res) {

    }

}

module.exports = new ItemController()