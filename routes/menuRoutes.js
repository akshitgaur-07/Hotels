const express = require('express');
const router = express.Router();
const MenuItem = require('../models/menu');

router.get('/', async (req, res) => {
  try {
    const data = await MenuItem.find();
    console.log('Data Fetched');
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({error : 'Internal Server Error'});
  }
})

router.post('/', async (req, res) => {
  try {
    const data = req.body;
    const newMenuItem = new MenuItem(data);

    const response = await newMenuItem.save();
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({error : 'Internal Server Error'});
  }
})

router.get('/:taste', async (req, res) => {
  try {
    const tasteType = req.params.taste;

    const dishes = await MenuItem.find({taste : tasteType});
    res.json(dishes);
  } catch (error) {
    console.log(error);
    res.status(500).json({error : 'Internal Server Error'});
  }
})

// Comment added
module.exports = router;

