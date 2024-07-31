const Order = require("../models/orders");

async function allOrders(req, res) {
    const allorder = await Order.find();
    return res.json(allorder);
};
async function newOrders(req, res) {
    const body = req.body;
    const document = await Order.create({
        Name: body.name,
        Address: body.address,
        Product: body.product
    });
    return res.json({ success: true, alertmessage: "New Order Created Successfully", document });
};
async function deleteOrders(req, res) {
    const id = req.params.id;
    const deleteorders = await Order.findByIdAndDelete(id);
    return res.json({ success: true, alertmessage: "Order Deleted successfully", deleteorders });
}
module.exports = {
    allOrders,
    newOrders,
    deleteOrders
}