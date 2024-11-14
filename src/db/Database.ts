import mongoose from "mongoose";

export default class Database {
    #uri: string | undefined;

    constructor(uri: string | undefined) {
        this.#uri = uri;
    }

    connect: () => Promise<void> = async () => {
        console.log(`Connecting to database at ${this.#uri}`);
        try {
            if (!this.#uri)
                throw new Error("No URI provided to connect to database");
            await mongoose.connect(this.#uri);
            console.log("Successfully connected to database");
        } catch (error) {
            console.error(`Error connecting to database: ${error}`);
        }
    };

    close: () => Promise<void> = async () => {
        await mongoose.connection.close();
    };
}
