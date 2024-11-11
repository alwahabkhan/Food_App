import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://alwahabalikhan8:Lunar567@cluster0.bwvf84x.mongodb.net/food-app"
  );
  console.log("Database Connected Successfully");
};
