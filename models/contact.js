//REQUIRE PACKAGES
const mongoose = require('mongoose');

// get a reference to Schema
const Schema = mongoose.Schema;

// create a schema for a contact
  const soccerClubSchema = new Schema({
    clubName: { type: String, required: true },
    clubLocation: { type: String, required: true },
    recruiting: { type: Boolean },
    price: { type: Number, required: true },
    teams: []
  });
// const contactSchema = new Schema({
//   firstName: { type: String, required: true },
//   lastName: { type: String, required: true },
//   emailAddress: { type: String },
//   homePhone: { type: String },
//   mobilePhone: { type: String, required: true }
// });

// create a model for a soccer club
const soccerClub = mongoose.model('soccerClub', soccerClubSchema);

module.exports = soccerClub;
