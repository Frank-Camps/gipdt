const express = require('express');
const router = express.Router();
const mongodb = require('mongodb');
const MongoClient = require('mongodb').MongoClient;

async function loadCompagniesCollection() {
    const client = await mongodb.MongoClient.connect(
        'mongodb+srv://dev-user:abc@cluster0.rt1mn.mongodb.net/GIPDT?retryWrites=true&w=majority',
        {"useNewUrlParser": true, "useUnifiedTopology": true}
      );
      return client.db('GIPDT').collection('compagnies');
}

router.get('/', async (req, res) => {
    const clients = await loadCompagniesCollection();
    res.send(await clients.find({}).toArray().catch(err => { if(err) console.log(err)}));

});

router.put('/:id', async (req, res) => {
    const clients = await loadCompagniesCollection();
    res.send(await clients.updateOne({id: req.params.id},{$set: {
      id: req.body.id,
      name: req.body.name,
      phone: req.body.phone,
      address: req.body.address
  }}, {upsert: true}));
});

// router.post('/', async (req, res) => {
//     const clients = await loadBuildingsCollection();
//     console.log(req.body);
//     res.send(await clients.insertOne(req.body));
// });

router.delete('/:id', async (req, res) => {
  const compagnies = await loadCompagniesCollection();
  res.send(await compagnies.deleteOne({id: req.params.id}));

});

module.exports = router;
