import { Model } from "mongoose";
import { MongoInterface } from "../interfaces/interfaces";

export class MongoDao<T extends MongoInterface> {
    constructor(public model: Model<T>) {}
    async getAll() {
        try {
            return await this.model.find({}).lean();
        } catch (error) {
            throw error;
        }
    }
    async findById(id: string): Promise<T | null> {
        try {
            return await this.model.findOne({ id: id } as any).lean();
        } catch (error) {
            throw error;
        }
    }
    async save(data: T) {
        try {
            const newItem = new this.model(data);
            await newItem.save();
            return newItem;
        } catch (error) {
            throw error;
        }
    }
}
