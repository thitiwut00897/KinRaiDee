const express = require('express');
const router = express.Router();
const TeachableMachine = require("@sashido/teachablemachine-node")
const fs = require("fs");

router.post('/prediction', async (req, res, next) => {
    const model = new TeachableMachine({
        modelUrl: "https://teachablemachine.withgoogle.com/models/Pg8d_6III/"
      });
      model.classify({"imageUrl": req.body.imageUrl}).then((predictions) => {
        res.status(200).json(predictions)
        console.log("Predictions:", predictions);
      }).catch((e) => {
        res.status(500).send({ message: "Error!" })
        console.log("error:", e);
      });
    
})



module.exports = router;