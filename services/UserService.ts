import { Request } from "express";
import { UserDao } from "../dao/UserDao";
import { User } from "../interfaces/interfaces";
import { crypto } from "../utils/crypto";
import { encryptPassword } from "../utils/bcrypt";

// CREA UNA INSTANCIA DEL DAO
const userInstance = UserDao.getInstance();
export const registerUser = async (req: Request) => {
    try {
        const data = req.body;
        const userExists = await userInstance.findByEmail(data.email);
        if (!userExists) {
            const id = crypto();
            const newUser: User = {
                id,
                ...data,
            };
            newUser.password = await encryptPassword(newUser.password);
            await userInstance.save(newUser);
        } else {
            throw "El email ya esta en uso";
        }
    } catch (error: any) {
        throw new Error(error);
    }
};
