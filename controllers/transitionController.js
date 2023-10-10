const transionModel = require("../model/transectionModel.js");
//get all
const getAllTransition = async (req, res) => {
  try {
    const transition = await transionModel.find({ userid: req.body.userid });
    res.status(200).json(transition);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

//add all
const addTransition = async (req, res) => {
  try {
    const newTransition = new transionModel(req.body);
    await newTransition.save();
    res.status(201).send("transition created");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports = { getAllTransition, addTransition };
