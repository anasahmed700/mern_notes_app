import * as UserController from './../controllers/usersController';
import express from "express";

const router = express.Router();

router.get("/", UserController.getAuthenticatedUser);
router.post("/signup", UserController.signUp);
router.post("/login", UserController.login);
router.post("/logout", UserController.logout);

export default router;