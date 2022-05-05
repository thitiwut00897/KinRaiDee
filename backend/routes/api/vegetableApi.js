const express = require('express');
const router = express.Router();
const Vegetable = require('../../models/vegetableModels')

router.post('/create', async (req, res, next) => {
    try {
        let data = new Vegetable(req.body)
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
        let data = await Vegetable.find().exec()
        res.status(200).json(data)
    } catch (err) {
        res.status(500).send({ message: "Error!" })
    }
})

router.get('/:_id', async (req, res, next) => {
    let vegetableId = req.params._id;
    try {
        let data = await Vegetable.findOne({ _id: vegetableId }).exec()
        res.status(200).json(data)
    } catch (err) {
        res.status(500).send({ message: "Error!" })
    }
})

router.put('/update/:_id', async (req, res, next) => {
    try {
        let data = await Vegetable.findOneAndUpdate({ _id: req.params._id }, req.body)
        res.status(200).send({ message: "Edit Success!" })
    } catch (err) {
        res.status(500).send({ message: "Error!" })
    }
})

router.delete('/delete/:_id', async (req, res, next) => {
    try {
        let data = await Vegetable.findOneAndDelete({ _id: req.params._id })

        res.status(200).send({ message: "successfully" })
    } catch (err) {

        return res.status(500).send({ message: "Error" })
    }
})

router.post('/search', async (req,res,next) =>{ 
    try{
        let data = await Vegetable.find().exec()
        let searchText = req.body.searchVegetable
        let vegetableName = []
        data.forEach(vegetable => {
            let name = vegetable.vegetableName;
            if (name.toUpperCase().includes(searchText.toUpperCase())) {
                vegetableName.push(vegetable)
            }
        });
        res.status(200).json(vegetableName)

    } catch (err) {
        res.status(500).send({ message: "Error!" })
    }
})

module.exports = router;