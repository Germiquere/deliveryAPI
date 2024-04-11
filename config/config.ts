import dotenv from "dotenv";
dotenv.config();
import { Config } from "../interfaces/interfaces";
export const config: Config = {
    port: process.env.PORT,
    dbConnection: process.env.DB_CNN,
    secretSeed: process.env.SECRET_JWT_SEED,
};
