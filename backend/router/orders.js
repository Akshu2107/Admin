const express = require("express");
const router = express.Router();
const { allOrders, newOrders, deleteOrders } = require("../controllers/order")




router.get("/", allOrders);
router.post("/addorder", newOrders);
router.delete("/:id", deleteOrders);

module.exports = router;
