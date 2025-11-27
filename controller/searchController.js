const connectDB = require('../database');
const { ObjectId } = require('mongodb');

exports.searchLessons = async (req, res) => {
    try {
        const db = await connectDB();
        const query = req.query.q ? req.query.q.toLowerCase() : "";

        if (!query) {
            const allLessons = await db.collection("lessons").find().toArray();
            return res.json(allLessons);
        }

        const results = await db.collection("lessons").find({
            $or: [
                { subject: { $regex: query, $options: "i" } },
                { location: { $regex: query, $options: "i" } },

                // Convert price to string then test regex
                { $expr: { $regexMatch: { input: { $toString: "$price" }, regex: query, options: "i" } } },

                // Convert spaces to string then test regex
                { $expr: { $regexMatch: { input: { $toString: "$spaces" }, regex: query, options: "i" } } }
            ]
        }).toArray();

        res.json(results);

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Search failed" });
    }
};
