import express from "express";
import protect from "../../middlewares/auth";

import { passwords, registrations, sessions } from "../../controllers/auth";

const { forgotPassword, resetPassword, updatePassword } = passwords;
const { register, updateDetails } = registrations;
const { getMe, login, logout } = sessions;

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
