"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.set("useNewUrlParser", true);
mongoose_1.default.set("useCreateIndex", true);
mongoose_1.default.set("useFindAndModify", false);
mongoose_1.default.set("useUnifiedTopology", true);
async function bootstrap() {
    try {
        console.log("conditio app is started");
        const url = "mongodb+srv://Administrator:iSwwN2ajbxXblxzGGox2@devcluster-qqyam.mongodb.net/conditio-db?retryWrites=true&w=majority";
        const options = {};
        const conn = await mongoose_1.default.createConnection(url, options);
        console.log("Host: ", conn.host);
        console.log("Database: ", conn.db);
        console.log("Collections: ", conn.collections);
    }
    catch (error) {
        console.error(error);
    }
}
bootstrap();
