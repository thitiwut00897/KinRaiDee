const express = require('express');
const router = express.Router();
const UserComment = require('../../models/userCommentModels')
const Recipe = require('../../models/recipeModels')
const User = require('../../models/userModels')

router.post('/create', async (req, res, next) => {
    try {
        let data = new UserComment(req.body)
        await data.save(() => {
            res.status(200).json(data)
        })
    } catch (err) {
        res.status(500).send({ message: "Error!" })
        console.log(err)
    }
})

router.put('/update/:_id', async (req, res, next) => {
    try {
        let data = await UserComment.findOneAndUpdate({ _id: req.params._id }, req.body)
        res.status(200).send({ message: "Edit Success!" })
    } catch (err) {
        res.status(500).send({ message: "Error!" })
    }
})

router.delete('/delete/:_id', async (req, res, next) => {
    try {
        let data = await UserComment.findOneAndDelete({ _id: req.params._id })

        res.status(200).send({ message: "successfully" })
    } catch (err) {

        return res.status(500).send({ message: "Error" })
    }
})

router.get('/recipes/:recipeId', async (req, res, next) => {
    let recipeId = req.params.recipeId;
    try {
        let data = []
        let userCommentData = await UserComment.find({ recipeId: recipeId }).exec()
        for(const userComment of userCommentData) {
            let userData = await User.findById({ _id: userComment.userId }).exec()
            data.push({
                "_id":userComment._id,
                "comment": userComment.comment,
                "userId": userComment.userId,
                "recipeId": userComment.recipeId,
                "photo": userData.photo,
                "firstName": userData.firstName,
                "lastName": userData.lastName,
            })
        }
        res.status(200).json(data)
    } catch (err) {
        res.status(500).send({ message: "Error!" })
    }
})

module.exports = router;