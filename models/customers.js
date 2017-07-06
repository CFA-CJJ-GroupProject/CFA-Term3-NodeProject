const mongoose = require('./init')

const customerSchema = mongoose.Schema({

  username: String, // Identifier for user.
  businessName: String,
  pointOfContacts: { //used for multi contact details
    department: String,
    phoneNumber: [],
    email: String,
    fax: String
    
    },
  address: String,
  notes: []

})

const customer = mongoose.model('customer', customerSchema)

module.exports = customer
