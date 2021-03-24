const express = require('express');
const router = express.Router();
const mongodb = require('mongodb');
const MongoClient = require('mongodb').MongoClient;

async function loadBuildingsCollection() {
    const client = await mongodb.MongoClient.connect(
        'mongodb+srv://Frank:404monHAX$@cluster0.rt1mn.mongodb.net/GIPDT?retryWrites=true&w=majority',
        {"useNewUrlParser": true}
      );
      return client.db('GIPDT').collection('buildings');
}

router.get('/', async (req, res) => {
    const clients = await loadBuildingsCollection();
    res.send(await clients.find({}).toArray().catch(err => { if(err) console.log(err)}));
        
});

router.put('/:id', async (req, res) => {
    const clients = await loadBuildingsCollection();
    console.log(req.body);
    // await clients.updateOne(req.body),{upsert: true};
});

module.exports = router;