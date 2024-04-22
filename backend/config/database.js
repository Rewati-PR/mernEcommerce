const mongoose = require("mongoose");

export const connectDatabase = (mongoURI) => {
  mongoose
    .connect(mongoURI).then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    });
};