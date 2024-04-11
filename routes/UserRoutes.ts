/* 
 Auth Routes
 /api/auth
*/
import { Router } from "express";
import { handleRegisterUser } from "../controllers/UserController";
import { validateRoute } from "../middlewares/validate-route";
import { validateFilds } from "../middlewares/validate-fild";

export const router = Router();
// register
router.post(
    "/auth/register",
    [...validateRoute.register, validateFilds],
    handleRegisterUser
);
