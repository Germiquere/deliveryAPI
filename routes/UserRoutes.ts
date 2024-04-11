/* 
 Auth Routes
 /api/auth
*/
import { Router } from "express";
import {
    handleLoginUser,
    handleRegisterUser,
} from "../controllers/UserController";
import { validateRoute } from "../middlewares/validate-route";
import { validateFilds } from "../middlewares/validate-fild";

export const router = Router();
// register
router.post(
    "/auth/register",
    [...validateRoute.register, validateFilds],
    handleRegisterUser
);
// login
router.post(
    "/auth/login",
    [...validateRoute.login, validateFilds],
    handleLoginUser
);
