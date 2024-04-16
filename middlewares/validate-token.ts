import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { config } from "../config/config";
declare module "express-serve-static-core" {
    interface Request {
        id: string;
        email: string;
        type: string;
    }
}
export const validateToken = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const token = req.header("x-token");
    if (!token) {
        return res.status(401).json({
            ok: false,
            message: "No hay token en la peticion",
        });
    }
    try {
        const { id, email, type } = jwt.verify(
            token,
            config.secretSeed!
        ) as JwtPayload;
        req.id = id;
        req.email = email;
        req.type = type;
    } catch (error) {
        return res.status(401).json({
            ok: false,
            message: "Token no valido",
        });
    }
    next();
};
