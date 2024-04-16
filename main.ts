import express from "express";
import { config } from "./config/config";
import dotenv from "dotenv";
import { dataBaseConnection } from "./database/mongoClient";
import { router as userRouter } from "./routes/UserRoutes";
import cors from "cors";
//======================================================
//app Initializations

// Crear el servidor de express
const app = express();
dotenv.config();
//======================================================
dataBaseConnection();
//======================================================
// middlewares
app.use(express.json());
app.use(cors());
//======================================================
//rutas

app.use("/api/users", userRouter);
//======================================================
// Escuchar peticiones
app.listen(config.port, () => {
    console.log(`Servidor corriendo en puerto ${config.port}`);
});
