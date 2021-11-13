const express = require('express');
const router = express.Router();
const Favorite = require("../../models/favoriteModels")

router.get('/', async (req, res, next) => {
    try {
        let data = await Favorite.find().exec()
        res.status(200).json(data)
    } catch (err) {
        res.status(500).send({ message: "Error!" })
    }
})

router.post('/create', async (req, res, next) => {
    try {
        let data = new Favorite(req.body)
        await data.save(() => {
            res.status(200).json(data)
        })
    } catch (err) {
        res.status(500).send({ message: "Error!" })
        console.log(err)
    }
})

router.get('/users/:_id', async (req, res, next) => {
    let userId = req.params._id;
    try {
        let data = await Favorite.find({ userId: userId }).exec()
        res.status(200).json(data)
    } catch (err) {
        res.status(500).send({ message: "Error!" })
    }
})

router.delete('/delete/:_id', async (req, res, next) => {
    try {
        let data = await Favorite.findOneAndDelete({ _id: req.params._id })

        res.status(200).send({ message: "successfully" })
    } catch (err) {

        return res.status(500).send({ message: "Error" })
    }
})

module.exports = router;