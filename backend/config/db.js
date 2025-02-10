const mongoose = require("mongoose");
const connectDD = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://dev3helpoperation:adADF123FAj@cluster0.jqsfv.mongodb.net/Furniro?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Mongoose version connect from backend server");
  } catch {
    console.log("Mongoose connection error:", error);
    process.exit(1);
  }
};
module.exports = connectDD;
