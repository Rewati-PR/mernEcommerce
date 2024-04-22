const mongoose = require("mongoose");

const connectDatabase = (uri) => {
  mongoose
    .connect(uri).then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    });
};

module.exports = connectDatabase();