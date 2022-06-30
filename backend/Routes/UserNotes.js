const express = require('express');
const {protect} = require('../Middleware/authMiddleware');

const { getNotes } = require('../Controllers/NoteController');


const router = express.Router();

router.route("/").get(protect, getNotes);
    // router.route("/create").post();
    // router.route("/:id").get().put().delete();


module.exports = router;