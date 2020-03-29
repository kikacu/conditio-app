import mongoose from "mongoose";

mongoose.set("useNewUrlParser", true);
mongoose.set("useCreateIndex", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useUnifiedTopology", true);

async function bootstrap() {
  try {
    console.log("conditio app is started");
    const url =
      "mongodb+srv://Administrator:iSwwN2ajbxXblxzGGox2@devcluster-qqyam.mongodb.net/conditio-db?retryWrites=true&w=majority";
    const options = {};
    const conn = await mongoose.createConnection(url, options);
    console.log("Host: ", conn.host);
    console.log("Database: ", conn.db);
    console.log("Collections: ", conn.collections);
  } catch (error) {
    console.error(error);
  }
}

bootstrap();
