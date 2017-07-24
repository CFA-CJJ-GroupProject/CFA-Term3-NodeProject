const mongoose = require('./init')

const customerSchema = mongoose.Schema({

  username: String, // Identifier for user.
  businessName: String,
  // pointOfContacts: { //used for multi contact details
    department: String,
    phoneNumber: String,
    email: String,
    fax: String,
    // },
  address: String,
  notes: String

})

const Customer = mongoose.model('customer', customerSchema)

module.exports = Customer
