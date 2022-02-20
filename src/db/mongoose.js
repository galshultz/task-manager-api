/* 
Mongo Run Command:
C:\Users\gals\mongodb\bin\mongod.exe --dbpath "C:\Users\gals\mongodb-data" --port 27018
*/

const mongoose = require("mongoose");
const validator = require("validator");
mongoose.connect(process.env.MONGODB_URL);

