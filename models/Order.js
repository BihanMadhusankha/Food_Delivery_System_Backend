const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    restaurant: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant', required: true },
    items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem', required: true }],
    totalAmount: { type: Number, required: true },
    status: { type: String, enum: ['pending', 'preparing', 'delivered'], default: 'pending' },
}, { timestamps: true });

module.exports = mongoose.model('Order', OrderSchema);
