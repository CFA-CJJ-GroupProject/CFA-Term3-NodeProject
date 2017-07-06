const mongoose = require('./init')

const customerSchema = mongoose.Schema({

  businessName: String,
  pointOfContacts: { //used for multi contact details
    name: String,
    contactType: String,
    value: String
  },
  address: String,
  notes: {
    date: Date,
    message: String
  }

})

const customer = mongoose.model('customer', customerSchema)

module.exports = customer
