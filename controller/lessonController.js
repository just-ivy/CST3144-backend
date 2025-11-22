const connectDB = require('../database');

exports.getAllLessons = async (req, res) => {
    try {
        const db = await connectDB();
        const lessons = await db.collection("lessons").find().toArray();
        res.json(lessons);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch lessons" });
    }
};

exports.updateLesson = async (req, res) => {
    try {
        const db = await connectDB();
        const { id } = req.params;
        const updateData = req.body;

        await db.collection("lessons").updateOne(
            { id: parseInt(id) },
            { $set: updateData }
        );

        res.json({ message: "Lesson updated" });

    } catch (err) {
        res.status(500).json({ error: "Update failed" });
    }
};
