const express = require('express');
const mongoose = require('mongoose');
const mongodb = require('mongodb');


const router = express.Router();
//importing model
const Score = require('../../models/score');

const URI = 'mongodb+srv://abc123:PXcahRYfODCBcl7A@vuexpress-w1elu.mongodb.net/test?retryWrites=true&w=majority';

async function Scores() {
    const client = await mongodb.MongoClient.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true })
    return client.db('vuexpress').collection('scores');
}


//Get Scores
router.get('/', async (req, res) => {
    const scores = await Scores();
    res.send(await scores.find({}).toArray())
});

//Post Score
router.post('/', async (req, res) => {
    const score = await Scores();
    const quest = req.body
    const newquest = new Score(quest);
     await score.insertOne(newquest);
    res.status(201).send();
});

module.exports = router;
