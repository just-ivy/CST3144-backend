const connectDB = require('../database');
const { ObjectId } = require('mongodb');

exports.createOrder = async (req, res) => {
    try {
        const db = await connectDB();
        const { name, phone, items } = req.body;

        // Basic validation
        if (!name || !phone || !items || !Array.isArray(items)) {
            return res.status(400).json({ error: "Invalid order data" });
        }

        const order = {
            name,
            phone,
            items,
            createdAt: new Date()
        };
        const result = await db.collection("orders").insertOne(order);

        res.json({
            message: "Order created successfully!",
            orderId: result.insertedId
        });
        
    } catch (err) {
        res.status(500).json({ error: "Failed to create order" });
    }
};
