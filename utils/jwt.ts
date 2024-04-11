import jwt from "jsonwebtoken";
import { User } from "../interfaces/interfaces";
import { config } from "../config/config";
export const generateAuthToken = (user: User) => {
    const payload = {
        id: user.id,
        email: user.email,
        type: user.type,
    };
    return jwt.sign(payload, config.secretSeed!, { expiresIn: "5h" });
};
