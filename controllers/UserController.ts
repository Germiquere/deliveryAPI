import { Request, Response } from "express";
import { registerUser } from "../services/UserService";

export const handleRegisterUser = async (req: Request, res: Response) => {
    try {
        await registerUser(req);
        res.status(201).json({
            ok: true,
            message: "Usuario registrado con exito",
        });
    } catch (error: any) {
        res.status(400).json({
            ok: false,
            message: error.message,
        });
    }
};
