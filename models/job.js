const mongoose = require('./init')

const jobSchema = mongoose.Schema({

  jobNumber: String, //Must be unique

  pickupAddress: String,
  pickupDate: Date,
  pickupTime: Date,
  pickupInstructions: String,

  deliveryAddress: String,
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