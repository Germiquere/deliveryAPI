import bcrypt from "bcrypt";

//======================================================
//encripa una contraseña
export const encryptPassword = async (password: string) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

//======================================================
//compara contraseñas
export const matchPassword = async function (
    password: string,
    userPassword: string
) {
    return await bcrypt.compare(password, userPassword);
};
