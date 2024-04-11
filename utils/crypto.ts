import cryptoNode from "crypto";
export const crypto = () => {
    return cryptoNode.randomBytes(10).toString("hex");
};
