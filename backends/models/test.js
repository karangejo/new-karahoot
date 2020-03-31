const mongoose = require('mongoose')

const testSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  owner: {
    type: String,
    required: true
  },
  numberOfQuestions: {
    type: String,
    required: true
  },
  typeOfTest : {
    type: String,
    required: true
  },
  questions: {
    type: [],
    required: true
  }
})

const testDB = mongoose.connection.useDb('tests');

const testInfo = testDB.model('test', testSchema);

module.exports = testInfo;


//module.exports = mongoose.model('test', testSchema)
