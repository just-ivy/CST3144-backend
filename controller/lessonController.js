const connectDB = require('../database');
const { ObjectId } = require('mongodb');

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
        const lessonId = req.params.id;
        const updateData = req.body;

        const result = await db.collection('lessons').updateOne(
            { _id: new ObjectId(lessonId) },
            { $set: updateData }
        );

        if (result.matchedCount === 0) {
            return res.status(404).json({ error: "Lesson not found" });
        }

        res.json({ message: "Lesson updated successfully!" });

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Update failed" });
    }
};