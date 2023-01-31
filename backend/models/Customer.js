const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        address: {
            type: {
                city: {
                    type: String,
                    required: true,
                },
                street: {
                    type: String,
                    required: true,
                },
                number: {
                    type: String,
                    required: true,
                },
            },
        },
        orders: {
            type: Array,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('customer', CustomerSchema);
