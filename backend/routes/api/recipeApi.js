const express = require('express');
const router = express.Router();
const Recipe = require("../../models/recipeModels")

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
    let userId = req.params._id;
    try {
        let data = await Recipe.findOne({ _id: userId }).exec()
        res.status(200).json(data)
    } catch (err) {
        res.status(500).send({ message: "Error!" })
    }
})

router.get('/users/:_id', async (req, res, next) => {
    let userId = req.params._id;
    try {
        let data = await Recipe.find({ userId: userId }).exec()
        res.status(200).json(data)
    } catch (err) {
        res.status(500).send({ message: "Error!" })
    }
})

router.put('/update/:_id', async (req, res, next) => {
    try {
        let data = await Recipe.findOneAndUpdate({ _id: req.params._id }, req.body)
        res.status(200).send({ message: "Edit Success!" })
    } catch (err) {
        res.status(500).send({ message: "Error!" })
    }
})

router.delete('/delete/:_id', async (req, res, next) => {
    try {
        let data = await Recipe.findOneAndDelete({ _id: req.params._id })

        res.status(200).send({ message: "successfully" })
    } catch (err) {

        return res.status(500).send({ message: "Error" })
    }
})
router.post('/search', async (req,res,next) =>{ 
    try{
        let data = await Recipe.find().exec()
        let searchText = req.body.searchRecipe
        console.log(data);
        let recipeName = []
        data.forEach(recipe => {
            let name = recipe.recipeName;
            if (name.toUpperCase().includes(searchText.toUpperCase())) {
                recipeName.push(recipe)
            }
        });
        console.log(recipeName)
        res.status(200).json(recipeName)

    } catch (err) {
        res.status(500).send({ message: "Error!" })
    }
})

module.exports = router;