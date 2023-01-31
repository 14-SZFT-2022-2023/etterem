const Food = require('../models/Food');

const getFoods = async (req, res) => {
    try {
        const foods = await Food.find();
        res.json(foods);
    } catch (error) {
        console.log(error);
    }
};

const postFood = async (req, res) => {
    try {
        const { name, description, price, image } = req.body;
        newFood = new Food({ name, description, price, image });
        newFood.save();
        res.json(newFood);
    } catch (error) {
        console.log(error);
    }
};

module.exports = { getFoods, postFood };
