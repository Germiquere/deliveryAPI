import jwt from "jsonwebtoken";
import { TokenData, User } from "../interfaces/interfaces";
import { config } from "../config/config";
export const generateAuthToken = (data: TokenData) => {
    const payload: TokenData = {
        id: data.id,
        email: data.email,
        type: data.type,
    };
    return jwt.sign(payload, config.secretSeed!, { expiresIn: "5h" });
};
