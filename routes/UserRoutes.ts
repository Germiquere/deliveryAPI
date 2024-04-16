/* 
 Auth Routes
 /api/auth
*/
import { Router } from "express";
import {
    handleLoginUser,
    handleRefreshToken,
    handleRegisterUser,
} from "../controllers/UserController";
import { validateRoute } from "../middlewares/validate-route";
import { validateFilds } from "../middlewares/validate-fild";
import { validateToken } from "../middlewares/validate-token";

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
// verify token
router.get("/renewToken", validateToken, handleRefreshToken);
