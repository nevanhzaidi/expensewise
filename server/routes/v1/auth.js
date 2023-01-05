import express from "express";
import protect from "../../middlewares/auth";

import {
  forgotPassword,
  resetPassword,
  updatePassword,
  register,
  updateDetails,
  login,
  logout,
  getMe,
} from "../../controllers/auth";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.get("/me", protect, getMe);
router.put("/updateDetails", protect, updateDetails);
router.put("/updatePassword", protect, updatePassword);
router.post("/forgotPassword", forgotPassword);
router.put("/resetPassword/:resetToken", resetPassword);

export default router;
