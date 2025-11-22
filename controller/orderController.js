const connectDB = require('../database');

exports.createOrder = async (req, res) => {
    try {
        const db = await connectDB();
        const { name, phone, items } = req.body;

        await db.collection("orders").insertOne({
            name,
            phone,
            items,
            createdAt: new Date()
        });

        res.json({ message: "Order saved" });
    } catch (err) {
        res.status(500).json({ error: "Failed to create order" });
    }
};
