import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    mongoose.connect("mongodb://mongo:27017/petsitter", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const mongodb = mongoose.connection;

    mongodb.on("error", console.error.bind(console, "connection error:"));
    mongodb.once("open", function () {
      console.log("Connected to MongoDB");
    });
  } catch (error) {
    console.error("Unable to connect to the database: ", error);
  }
};

export { connectToMongoDB };
