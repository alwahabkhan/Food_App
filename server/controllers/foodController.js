import foodModel from "./../models/foodModel.js";
import fs from "fs";

const addFood = async (req, res) => {
  let image_filename = `${req.file.filename}`;

  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_filename,
  });
  try {
    await food.save();
    res.json({ success: true, message: "food added successfully" });
  } catch (error) {
    res.json({ success: false, message: "Error while adding food" });
  }
};

const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.json({ success: true, data: foods });
  } catch (error) {
    res.json({ success: false, message: "Error in getting food list" });
  }
};

const removeFood = async (req, res) => {
  try {
    const food = await foodModel.findById(req.params.id);
    fs.unlink(`uploads/${food.image}`, () => {});

    await foodModel.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: `item is removed from food list successfully`,
    });
  } catch (error) {
    res.json({ success: false, message: "Error in deleting the food item" });
  }
};

export { addFood, listFood, removeFood };
