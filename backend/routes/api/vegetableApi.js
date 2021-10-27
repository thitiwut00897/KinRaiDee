const express = require('express');
const router = express.Router();
const Vegetable = require('../../models/vegetableModels')

router.get('/', async (req, res, next) => {
    try {
        let data = await Vegetable.find().exec()
        res.status(200).json(data)
    } catch (err) {
        res.status(500).send({ message: "Error!" })
    }
})

router.get('/:_id', async (req, res, next) => {
    let productId = req.params.id;
    try {
        let data = await Vegetable.findOne({ _id: productId }).exec()
        res.status(200).json(data)
    } catch (err) {
        res.status(500).send({ message: "Error!" })
    }
})

module.exports = router;