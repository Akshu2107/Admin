const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
    {
        Name: {
            type: String,
            required: true,
        },
        Address: {
            type: String,
            required: true,
        },
        Product: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const Order = mongoose.model("order", orderSchema);

module.exports = Order;
