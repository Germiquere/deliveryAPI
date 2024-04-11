import { check } from "express-validator";

export const validateRoute = {
    // TODO: ver como validar los campos que no son obligatorios en caso de que los coloquen.
    register: [
        check("name", "El nombre es obligatorio")
            .trim()
            .not()
            .isEmpty()
            .isString()
            .withMessage("El nombre debe ser un string"),
        check("email", "El email es obligatorio").isEmail(),
        check(
            "password",
            "La contraseña debe de tener minimo 8 caracteres y al menos 1 mayuscula"
        )
            .trim()
            .isLength({ min: 8 }),
        // .matches(/[A-Z]/, "g"),
        check("type", "El tipo de usuario es obligatorio")
            .trim()
            .not()
            .isEmpty()
            .isString()
            .withMessage("El nombre debe ser un string"),
    ],
    login: [
        check("email", "El email es obligatorio").isEmail(),
        check(
            "password",
            "La contraseña debe de tener minimo 8 caracteres y al menos 1 mayuscula"
        )
            .trim()
            .isLength({ min: 8 }),
        // .matches(/[A-Z]/, "g")
    ],
    // createUpdate: [
    //     check(
    //         "startDate",
    //         "La fecha es obligatrio con formato YYYY-MM-DDTHH:mm:ss.sssZ"
    //     )
    //         .notEmpty()
    //         .matches(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/i),
    //     check("origin", "El lugar de origen es requerido").not().isEmpty(),
    //     check("destination", "El luegar de destino es requerido")
    //         .not()
    //         .isEmpty(),
    //     check("price", "El precio es requerido").not().isEmpty(),
    //     check("shop", "El id del negocio es requerido").not().isEmpty(),
    // ],
};
