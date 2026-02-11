const Chef = require("../models/chefModel");

const getAllChefs = async (req, res) => {
  try {
    const chefs = await Chef.find();
    res.status(200).json(chefs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createChef = async (req, res) => {
  try {
    const chef = await Chef.create(req.body);
    res.status(201).json(chef);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getChefById = async (req, res) => {
  try {
    const chef = await Chef.findById(req.params.id);
    if (!chef) return res.status(404).json({ message: "Chef not found" });
    res.status(200).json(chef);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const updateChef = async (req, res) => {
  try {
    const chef = await Chef.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!chef) return res.status(404).json({ message: "Chef not found" });
    res.status(200).json(chef);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deleteChef = async (req, res) => {
  try {
    const chef = await Chef.findByIdAndDelete(req.params.id);
    if (!chef) return res.status(404).json({ message: "Chef not found" });
    res.status(200).json({ message: "Chef deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  getAllChefs,
  createChef,
  getChefById,
  updateChef,
  deleteChef,
};
