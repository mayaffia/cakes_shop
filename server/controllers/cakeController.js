const uuid = require('uuid')
const path = require('path')
const {Cake} = require('../models/models')
const apiError = require('../error/apiError')

class CakeController {
  async create(req, res, next) {
    try {
        const { name, price, typeId } = req.body;
        const {img} = req.files
        let fileName = uuid.v4() + ".jpg"
        img.mv(path.resolve(__dirname, '..', 'static', fileName))
  
        const cake = await Cake.create({name, price, typeId, img: fileName})
  
        return res.json(cake)
    } catch (e) {
        next(apiError.badRequest(e.message))
    }
      
  }

  async getAll(req, res) {
    const {typeId} = req.query
    let cakes;
    if (!typeId) {
        cakes = await Cake.findAll()
    } else {
      cakes = await Cake.findAll({where:{typeId}})
    }
    return res.json(cakes);
  }

  async get(req, res) {
    const {id} = req.params
    const cake = await Cake.findOne( {where: {id}})
    return res.json(cake)
  }
}

module.exports = new CakeController();
