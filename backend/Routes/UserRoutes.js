// import express from "express";
const express = require("express");
const {authUser,
  registerUser,
  updateUserProfile,} = require('../controllers/userController.js');
// import {
//   authUser,
//   registerUser,
//   updateUserProfile,
// } from "../controllers/userController.js";
// import { protect } from "";
const {protect} = require('../middleware/authMiddleware.js');
const router = express.Router();

router.route("/").post(registerUser);
router.post("/login", authUser);
router.route("/profile").post(protect, updateUserProfile);

module.exports =  router;
