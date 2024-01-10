const mongoose = require('mongoose');

const connectDatabase = async () => {
  try{
      await mongoose.connect(process.env.DB_URI)
  }catch(err){
      console.log(err)
  }
};

module.exports = connectDatabase;
