const express = require('express');
const router = express.Router();
const Recipe = require("../../models/recipeModels")
const User = require("../../models/userModels")

router.post('/create', async (req, res, next) => {
    console.log(req.body);
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
        let data = [];
        let recipes = await Recipe.find().exec()
        for(const recipe of recipes) {
            const user = await User.findOne({ _id: recipe.userId }).exec()
            data.push({
                "_id":recipe._id,
                "recipeName": recipe.recipeName,
                "directions": recipe.directions,
                "ingredients": recipe.ingredients,
                "date": recipe.date,
                "picture": recipe.picture,
                "likeCount": recipe.likeCount,
                "commentCount": recipe.commentCount,
                "status": recipe.status,
                "userId": user._id,
                "firstName": user.firstName,
                "lastName": user.lastName,
                "photo": user.photo
            })
        }
        res.status(200).json(data)

    } catch (err) {
        res.status(500).send({ message: "Error!" })
    }
})


router.get('/:_id', async (req, res, next) => {
    let recipeId = req.params._id;
    try {
        let data = []
        let recipe = await Recipe.findOne({ _id: recipeId }).exec()
        const user = await User.findOne({ _id: recipe.userId }).exec()
            data.push({
                "_id":recipe._id,
                "recipeName": recipe.recipeName,
                "directions": recipe.directions,
                "ingredients": recipe.ingredients,
                "date": recipe.date,
                "picture": recipe.picture,
                "likeCount": recipe.likeCount,
                "commentCount": recipe.commentCount,
                "status": recipe.status,
                "userId": user._id,
                "firstName": user.firstName,
                "lastName": user.lastName,
                "photo": user.photo
            })
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

router.post('/search/:vegetableName', async(req,res,next) =>{ 
    

    try{
        switch (req.params.vegetableName) {
            case "Yanang":
              thaiName ="ย่านาง";
              break;
            case "Saranae":
              thaiName ="สะระแหน่";
              break;
            case "Plu":
               thaiName ="พลู";
              break;
            case "Mint":
              thaiName ="มิ้น";
              break;
            case "Manow":
              thaiName ="มะนาว";
              break;
            case "Makrut":
              thaiName ="มะกรูด";
              break;
            case "Lemon":
              thaiName ="เลม่อน";
            case "Krapao khaow" :
              thaiName ="กะเพรา";
              break;
            case "Krapao dang":
              thaiName ="กะเพราแดง";
              break
            case "Horapa":
              thaiName ="โหระพา";
              break;
            case "Fahthalinejol":
              thaiName ="ฟ้าทะลายโจร";
              break;
            case "Bai makrut":
              thaiName ="ใบมะกรูด";
          }
        let vegetableName = thaiName;
        let data = await Recipe.find().exec()
        let recipes = [];
        data.forEach(recipe => {
            let ingredients = recipe.ingredients;
            if(ingredients.indexOf(vegetableName) !== -1){
                recipes.push(recipe)
            }
        });
        res.status(200).json(recipes)
    } catch (err) {
        res.status(500).send({ message: "Error!" })
    }
})

module.exports = router;