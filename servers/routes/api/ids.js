const express = require('express');
const router = express.Router();
const mongodb = require('mongodb');

// connect to database orders
async function loadIdsCollection() {
  const client = await mongodb.MongoClient.connect(
      'mongodb+srv://dev-user:abc@cluster0.rt1mn.mongodb.net/GIPDT?retryWrites=true&w=majority',
      {"useNewUrlParser": true, "useUnifiedTopology": true}
    );
    return client.db('GIPDT').collection('ids');
}

// Post
router.post('/', async (req, res) => {
    const index = await loadIdsCollection();
    res.send(await index.insertOne(req.body));
});

// Get
router.get('/', async (req, res) => {
    const index = await loadIdsCollection();
    res.send(await index.findOne({name: "building"}));
});

// Put
router.put('/', async (req, res) => {
    const index = await loadIdsCollection();
    res.send(await index.updateOne({name: "building"}, {$set: req.body}));
});

// /*============================================= */
// // Options Id
// /*============================================= */
// // Get options Id
// router.get('/options-index', async (req, res) => {
//   const index = await loadIndexIdCollection();
//   res.send(await index.findOne({title: "options-index-id"}));
// });

// // Put
// router.put('/options-index', async (req, res) => {
//   const index = await loadIndexIdCollection();
//   res.send(await index.updateOne({title: "options-index-id"}, {$set: req.body}));
// });

// // Delete
// router.post('/', async (req, res) => {
//     const index = await loadIndexIdCollection();
//     res.send(await index.deleteOne({title: "index-id"}));
// });

// /*============================================= */
// // Options List Id
// /*============================================= */
// router.get('/options-lists-index', async (req, res) => {
//   const index = await loadIndexIdCollection();
//   res.send(await index.findOne({title: "options-lists-index-id"}));
// });

// // Put
// router.put('/options-lists-index', async (req, res) => {
//   const index = await loadIndexIdCollection();
//   res.send(await index.updateOne({title: "options-lists-index-id"}, {$set: req.body}));
// });
module.exports = router;
