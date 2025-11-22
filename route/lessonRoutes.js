const express = require('express');
const router = express.Router();
const controller = require('../controller/lessonController');

router.get('/', controller.getAllLessons);
router.put('/:id', controller.updateLesson);

module.exports = router;
