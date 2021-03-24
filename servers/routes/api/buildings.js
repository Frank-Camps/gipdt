const express = require('express');
const router = express.Router();
const mongodb = require('mongodb');

async function loadBuildingsCollection() {
    const client = await mongodb.MongoClient.connect(
        "mongodb+srv://Frank:404monHAX$@cluster0.rt1mn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    return client.db('GIPDT').collection('buildings');
}

router.get('/', async (req, res) => {
    const clients = await loadBuildingsCollection();
    res.send(await clients.find({}).toArray());
});

router.put('/:id', async (req, res) => {
    const clients = await loadBuildingsCollection();
    res.send(await clients.updateOne(req.body),{upsert: true});
    
});

module.exports = router;