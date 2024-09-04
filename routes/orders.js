const express = require('express');
const auth = require('../middleware/auth');
const Order = require('../models/Order');

const router = express.Router();

router.post('/', auth, async (req, res) => {
    const { restaurant, items, totalAmount } = req.body;

    try {
        const order = new Order({
            user: req.user.id,
            restaurant,
            items,
            totalAmount,
        });
        await order.save();
        res.status(201).json({ message: "Order placed successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
