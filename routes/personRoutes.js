const express = require('express');
const router = express.Router();
const Person = require('../models/person');

// POST route to add a person
router.post('/', async (req, res) => {
  try {
      const data = req.body // Assuming the request body contains person's data

      // Create a new Person document using the Mongoose model
      const newPerson = new Person(data); 

      // Save the new person to the database
      const response = await newPerson.save();
      res.status(200).json(response);
  } catch (error) {
      console.log(error);
      res.status(500).json({error : 'Internal server error'});
  }
})

router.get('/', async (req,res) => {
  try {
    const data = await Person.find();
    console.log('Data fetched');
    res.status(200).json(data);
    
  } catch (error) {
      console.log(error);
      res.status(500).json({error : 'Internal server error'});
  }
})

router.get('/:work', async (req, res) => {
  try {
    const workType = req.params.work; // Extract the workType from the URL parameter
    const persons = await Person.find({work : workType});
    res.json(persons);
    
  } catch (error) {
    console.log(error);
    res.status(500).json({error : 'Internal Server Error'});
  }
})

router.put('/:id', async (req,res) => {
  try {
    const personId = req.params.id; // Exract the id from the URL parameter
    const updatedPersonData = req.body; // Updated data for the person

    const response = await Person.findByIdAndUpdate(personId, updatedPersonData, {
      new: true, // Return the updated document
      runValidators: true, // Run Mongoose validation
    });

    if(!response) {
      return res.status(404).json({error : 'Person not found'});
    }

    res.json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({error : 'Internal Server Error'});
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const personId = req.params.id;

    const response = await Person.findByIdAndDelete(personId);
    if (!response) {
      return res.status(404).json({ error: 'Person not found' });
    }
    
    res.json({message : 'Person deleted successfully'});
    
  } catch (error) {
    console.log(error);
    res.status(500).json({error : 'Internal Server Error'});
  }
})

module.exports = router;