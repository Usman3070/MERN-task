const counter = require("../model/ControllerModel");

const getvaluebyid = async (req, res, next) => {
  const id = req.params.id;
  let newvalue;
  try {
    newvalue = await counter.findById(id);
  } catch (err) {
    console.log(err);
  }
  if (!newvalue) {
    return res.status(404).json({ message: "No value found" });
  }
  return res.status(200).json({ newvalue });
};

const addvalue = async (req, res, next) => {
  const value = req.body;

  let newvalue;
  try {
    newvalue = new counter({
      value,
    });
    await newvalue.save();
  } catch (err) {
    console.log(err);
  }

  if (!newvalue) {
    return res.status(500).json({ message: "Unable To Add" });
  }
  return res.status(201).json({ newvalue });
};

const updatevalue = async (req, res, next) => {
  const id = req.params.id;
  const value = req.body.value;

  let newvalue;
  try {
    newvalue = await counter.findByIdAndUpdate(id, {
      value: value,
    });
    newvalue = await newvalue.save();
  } catch (err) {
    console.log(err);
  }
  if (!newvalue) {
    return res.status(404).json({ message: "Unable To Update By value" });
  }
  return res.status(200).json({ newvalue });
};

exports.addvalue = addvalue;
exports.getvaluebyid = getvaluebyid;
exports.updatevalue = updatevalue;
