const express = require("express");
const router = express.Router();
const Test = require("../models/test");

// Getting all
router.get("/", async (req, res) => {
  try {
    const testsBelongingToOwner = await Test.find({ owner: req.body.owner });
    res.json(testsBelongingToOwner);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
/*
// Getting One
router.get('/:id', getTest, (req, res, next) => {
  res.json(res.test)
})
*/
// get all tests by ownerID
router.get("/id", async (req, res) => {
  try {
    //console.log(req.query);
    tests = await Test.find({ owner: req.query.id });
    res.status(200).json(tests);
    if (tests == null) {
      return res.status(404).json({ message: "Cannot find test" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
});

// Creating one
router.post("/", async function (req, res) {
  const testToSave = new Test({
    title: req.body.title,
    owner: req.body.owner,
    numberOfQuestions: req.body.numberOfQuestions,
    typeOfTest: req.body.typeOfTest,
    questions: req.body.questions,
  });
  console.log(testToSave);
  try {
    const newTest = await testToSave.save();
    //console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
    //console.log(newTest);
    res.status(201).json(newTest);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
});

//delete by test ID
router.post("/deletebyid", async (req, res) => {
  try {
    const deleted = await Test.findByIdAndDelete(req.body.id);
    console.log(deleted);
    res.json({ message: "Deleted Test", deleted: deleted });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Updating One
//router.patch('/:id', getSubscriber, async (req, res) => {
//if (req.body.name != null) {
//res.subscriber.name = req.body.name
//  }
//  if (req.body.subscribedToChannel != null) {
//  res.subscriber.subscribedToChannel = req.body.subscribedToChannel
//  }
//try {
//  const updatedSubscriber = await res.subscriber.save()
//  res.json(updatedSubscriber)
//  } catch (err) {
//  res.status(400).json({ message: err.message })
//}
//})

// Deleting One
/*
router.delete('/:id', getTest, async (req, res) => {
  try {
    await res.test.remove()
    res.json({ message: 'Deleted Test' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})
*/
async function getTest(req, res, next) {
  let test;
  try {
    test = await Test.findById(req.params.id);
    if (test == null) {
      return res.status(404).json({ message: "Cannot find test" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.test = test;
  next();
}

module.exports = router;
