const express = require('express');
const router = express.Router();
const Recipe = require('../../models/recipeModels')

router.post('/create', async (req, res, next) => {
    try {
        let data = new Recipe(req.body)
        await data.save(() => {
            res.status(200).json(data)
        })
    } catch (err) {
        res.status(500).send({ message: "Error!" })
        console.log(err)
    }
})

router.get('/', async (req, res, next) => {
    try {
        let data = await Recipe.find().exec()
        res.status(200).json(data)
    } catch (err) {
        res.status(500).send({ message: "Error!" })
    }
})


router.get('/:_id', async (req, res, next) => {
    let productId = req.params.id;
    try {
        let data = await Recipe.findOne({ _id: productId }).exec()
        res.status(200).json(data)
    } catch (err) {
        res.status(500).send({ message: "Error!" })
    }
})


router.put('/update/:_id', async (req, res, next) => {
    try {
        let data = await Recipe.findOneAndUpdate({ _id: req.params.id }, req.body)
        res.status(200).send({ message: "Edit Success!" })
    } catch (err) {
        res.status(500).send({ message: "Error!" })
    }
})


router.delete('/delete/:_id', async (req, res, next) => {
    try {
        let data = await Recipe.findOneAndDelete({ _id: req.params.id })

        res.status(200).send({ message: "successfully" })
    } catch (err) {

        return res.status(500).send({ message: "Error" })
    }
})

module.exports = router;