//To make sure routes.js file is connected, consolelog it. In terminal when you type node index.js, you should see "routes.js file ready" and "ready to roll!!"
console.log("routes.js file ready")

//REQUIRE PACKAGES
const mongoose=require('mongoose');
const express = require('express');
const routes = express.Router();

//"soccerClub" is referring to the contact.js file in models folder. In the contact.js file, you created a model called "soccerClub" for your schema"
const Club = require('../models/contact');

routes.get('/', (req, res) => {
  Club.find()
    // then show my soccer clubs
    //"listContacts" is referencing the listContacts.handlebars file under Views Folder"
    .then(contacts=> res.render('listContacts', { contacts: contacts}))
    // handle errors
    .catch(err => res.send('there was an error :('));
});

//"/contactForm" is referencing contactForm.handlebars file under Views Folder
routes.get('/contactForm', (req, res) => {
  if (req.query.id) {
    Club.findById(req.query.id)
      // render form with this contact
      .then(contacts=> res.render('contactForm', { contacts: contacts }));
  } else {
    res.render('contactForm');
  }
});

routes.post('/saveContact', (req, res) => {
  if(!req.body.id){
    req.body.id = new mongoose.mongo.ObjectID();
  }

  Club.findByIdAndUpdate(req.body.id, req.body, { upsert: true })
    .then(() => res.redirect('/'))
    // catch validation errors
    .catch(err => {
      console.log(err);
      res.render('contactForm', {
        errors: err.errors,
        contact: req.body
      });
    });
});

routes.get('/deleteContact', (req, res) => {
  Club.findById(req.query.id)
    .remove()
    // then redirect to the homepage
    .then(() => res.redirect('/'));
});

module.exports = routes;
