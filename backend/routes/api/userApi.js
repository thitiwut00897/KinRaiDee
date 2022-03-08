const express = require('express');
const router = express.Router();
const User = require("../../models/userModels")

router.post('/create', async (req, res, next) => {
    try {
        let data = new User(req.body)
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
        let data = await User.find().exec()
        res.status(200).json(data)
    } catch (err) {
        res.status(500).send({ message: "Error!" })
    }
})


router.get('/:_id', async (req, res, next) => {
    let userId = req.params._id;
    try {
        let data = await User.findOne({ _id: userId }).exec()
        res.status(200).json(data)
    } catch (err) {
        res.status(500).send({ message: "Error!" })
    }
})


router.put('/update/:_id', async (req, res, next) => {
    try {
        let data = await User.findOneAndUpdate({ _id: req.params._id }, req.body)
        res.status(200).send({ message: "Edit Success!" })
    } catch (err) {
        res.status(500).send({ message: "Error!" })
    }
})


router.delete('/delete/:_id', async (req, res, next) => {
    try {
        let data = await User.findOneAndDelete({ _id: req.params._id })

        res.status(200).send({ message: "successfully" })
    } catch (err) {

        return res.status(500).send({ message: "Error" })
    }
})

router.post('/login', async (req,res,next) =>{
    try {
        let data = await User.find()
        let login = req.body
        if(data[0].email === login.userEmail && data[0].password === login.userPassword){
            res.status(200).json(data)
        }
        else if(data[0].email !== login.userEmail || data[0].password !== login.userPassword){
            res.status(400).send({ message: "Invalid Email or Password" })
        }
    } catch (err) {
        return res.status(500).send({ message: "Error" })
    }
})

module.exports = router;