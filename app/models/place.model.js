const mongoose = require('mongoose')

const placeSchema = mongoose.Schema({
  _id: String,
  creatorId: String,
  name: String,
  placeTypeId: { type: Number, ref: 'PlaceType' },
  imageData: Buffer,
  description: String,
  url: String,
  address: String,
  coordinates: String,
  approved: Boolean
  //todo access admin app users and who created the place?
})

module.exports = mongoose.model('Place', placeSchema)