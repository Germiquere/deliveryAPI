import { Request } from "express";
import { UserDao } from "../dao/UserDao";
import { User } from "../interfaces/interfaces";
import { crypto } from "../utils/crypto";
import { encryptPassword, matchPassword } from "../utils/bcrypt";
import { generateAuthToken } from "../utils/jwt";

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
export const loginUser = async (req: Request) => {
    try {
        const data = req.body;
        const userExists = await userInstance.findByEmail(data.email);
        if (!userExists) {
            throw "Alguno de los datos ingresados no es valido";
        }
        const validPassword = await matchPassword(
            data.password,
            userExists.password
        );
        if (!validPassword) {
            throw "Alguno de los datos ingresados no es valido";
        }
        userExists.token = generateAuthToken(userExists);
        return userExists;
    } catch (error: any) {
        throw new Error(error);
    }
};
