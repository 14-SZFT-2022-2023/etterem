const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema(
    {
        order: {
            type: Array,
            required: true,
        },
        customer: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('cart', CartSchema);
