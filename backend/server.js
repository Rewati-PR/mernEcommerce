const app = require("./app");
const cloudinary = require("cloudinary");
import { connectDatabase } from "./config/database.js";


// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception`);
  process.exit(1);
});
const port = process.env.PORT || 4000;
const nodeEnv = process.env.NODE_ENV || "";
const mongoURI = process.env.DB_URI || "";
const cloudinaryName = process.env.CLOUDINARY_NAME || "";
const cloudinaryAPI = process.env.CLOUDINARY_API_KEY || "";
const cloudinarySecret = process.env.CLOUDINARY_API_SECRET || "";

// Config
if (nodeEnv !== "PRODUCTION") {
  require("dotenv").config({ path: "backend/config/config.env" });
}

// Connecting to database
connectDatabase(mongoURI);

cloudinary.config({
  cloud_name: cloudinaryName,
  api_key: cloudinaryAPI,
  api_secret: cloudinarySecret,
});

const server = app.listen(port, () => {
  console.log(`Server is working on http://localhost:${port}`);
});

//Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Unhandled Promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});
