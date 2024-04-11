import e, { Request, Response } from "express";
import { loginUser, registerUser } from "../services/UserService";

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
export const handleLoginUser = async (req: Request, res: Response) => {
    try {
        const {
            _id,
            id,
            name,
            email,
            address,
            phone,
            type,
            creationStatus,
            accessStatus,
            token,
        } = await loginUser(req);
        res.status(201).json({
            ok: true,
            user: {
                _id,
                id,
                name,
                email,
                address,
                phone,
                type,
                creationStatus,
                accessStatus,
                token,
            },
        });
    } catch (error: any) {
        res.status(400).json({
            ok: false,
            message: error.message,
        });
    }
};
