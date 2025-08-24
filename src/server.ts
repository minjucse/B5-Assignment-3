import config from "./app/config"
import { Server } from 'http';
import mongoose from 'mongoose';
import app from './app';

let server: Server;

async function main() {
    try {
        await mongoose.connect(config.DB_URL as string);
        
        console.log("Connected to MongoDB Using Mongoose!!");

        server = app.listen(config.PORT, () => {
            console.log(`App is listening on port ${config.PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
}

main()