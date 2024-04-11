import { Document } from "mongoose";
export interface Config {
    port: string | undefined;
    dbConnection: string | undefined;
    secretSeed: string | undefined;
}
export interface MongoInterface extends Document {}
export interface User extends MongoInterface {
    _id?: string;
    id: string;
    name: string;
    email: string;
    password: string;
    address?: string;
    phone?: number;
    type: "admin" | "negocio" | "cadete";
    creationStatus?: "creado" | "borrado";
    accessStatus?: "habilitado" | "desabilitado";
}
