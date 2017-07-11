const mongoose = require('./init')

const jobSchema = mongoose.Schema({

  jobNumber: String, //Must be unique

  pickupStreet: String,
  pickupSuburb: String,
  pickupPostcode: Number,
  pickupState: String,
  pickupDate: Date,
  pickupTime: Date,
  pickupInstructions: String,

  deliveryStreet: String,
  deliverySuburb: String,
  deliveryPostcode: Number,
  deliveryState: String,
  deliveryDate: Date,
  deliveryTime: Date,
  deliveryInstructions: String,

  descriptionOfGoods: String,
  deliveryType: String,

  driverId: Number, // must not be empty
  businessId: Number, // must not be empty

  status: String,

  dimensions: {
    height: Number,
    length: Number,
    width: Number
  },

  weight: Number

})

const Job = mongoose.model('Job', jobSchema)

module.exports = Job

