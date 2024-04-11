import { User } from "../interfaces/interfaces";
import { userModel } from "../models/User";
import { MongoDao } from "./MongoDao";

let instance: UserDao | null = null;
export class UserDao extends MongoDao<User> {
    constructor() {
        super(userModel);
    }
    async findByEmail(email: string) {
        try {
            return await this.model.findOne({ email: email }).lean();
        } catch (error) {
            throw error;
        }
    }
    static getInstance() {
        if (!instance) {
            instance = new UserDao();
        }
        return instance;
    }
}
