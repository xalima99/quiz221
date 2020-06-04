const express = require('express');
const mongoose = require('mongoose');
const mongodb = require('mongodb');


const router = express.Router();
//importing model
const Question = require('../../models/question.model');

const URI = 'mongodb+srv://abc123:PXcahRYfODCBcl7A@vuexpress-w1elu.mongodb.net/test?retryWrites=true&w=majority';
async function loadPostsCollection() {
    const client = await mongodb.MongoClient.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true })
    return client.db('vuexpress').collection('questions');
}

//Get Questions
router.get('/', async (req, res) => {
    const questions = await loadPostsCollection();
    res.send(await questions.find({}).toArray())
});


//Add Questions
router.post('/', async (req, res) => {
    const posts = await loadPostsCollection();
    const quest = req.body
    const newquest = new Question(quest);
     await posts.insertOne(newquest);
    res.status(201).send();
});


//Delete Questions
  router.delete('/:id', async (req, res) => {
    const posts = await loadPostsCollection();
    await posts.deleteOne({ _id: new mongodb.ObjectID(req.params.id) });
    res.status(200).send();
});

module.exports = router;
