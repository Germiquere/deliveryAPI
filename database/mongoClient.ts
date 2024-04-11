import mongoose from "mongoose";
import { config } from "../config/config";
import dotenv from "dotenv";
dotenv.config();
export const dataBaseConnection = async () => {
    try {
        await mongoose.connect(config.dbConnection!);
        console.log("DB online");
    } catch (error) {
        throw new Error("Error a la hora de inicializar la db");
    }
};
