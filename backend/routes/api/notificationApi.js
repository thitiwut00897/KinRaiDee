const express = require('express');
const router = express.Router();
const Notifiaction = require('../../models/notificationModels')

router.post('/create', async (req, res, next) => {
    try {
        let data = new Notifiaction(req.body)
        await data.save(() => {
            res.status(200).json(data)
        })
    } catch (err) {
        res.status(500).send({ message: "Error!" })
        console.log(err)
    }
})

router.get('/:_id', async (req, res, next) => {
    let notificationId = req.params._id;
    try {
        let data = await Notifiaction.findOne({ _id: notificationId }).exec()
        res.status(200).json(data)
    } catch (err) {
        res.status(500).send({ message: "Error!" })
    }
})

router.get('/users/:_id', async (req, res, next) => {
    let userId = req.params._id;
    try {
        let data = await Notifiaction.find({ userId: userId }).exec()
        res.status(200).json(data)
    } catch (err) {
        res.status(500).send({ message: "Error!" })
    }
})

module.exports = router;