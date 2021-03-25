const express = require('express');
const router = express.Router();
const mongodb = require('mongodb');
const MongoClient = require('mongodb').MongoClient;

async function loadBuildingsCollection() {
    const client = await mongodb.MongoClient.connect(
        'mongodb+srv://dev-user:abc@cluster0.rt1mn.mongodb.net/GIPDT?retryWrites=true&w=majority',
        {"useNewUrlParser": true, "useUnifiedTopology": true}
      );
      return client.db('GIPDT').collection('buildings');
}

router.get('/', async (req, res) => {
    const clients = await loadBuildingsCollection();
    res.send(await clients.find({}).toArray().catch(err => { if(err) console.log(err)}));

});

router.put('/:id', async (req, res) => {
    const clients = await loadBuildingsCollection();
    res.send(await clients.updateOne({id: req.params.id},{$set: {
      id: req.body.id,
      street_name: req.body.street_name,
      street_number: req.body.street_number,
      city: req.body.city,
      appartments: req.body.appartments,
  }}, {upsert: true}));
});

// router.post('/', async (req, res) => {
//     const clients = await loadBuildingsCollection();
//     console.log(req.body);
//     res.send(await clients.insertOne(req.body));
// });

router.delete('/:id', async (req, res) => {
  const buildings = await loadBuildingsCollection();
  res.send(await buildings.deleteOne({id: req.params.id}));

});

module.exports = router;
