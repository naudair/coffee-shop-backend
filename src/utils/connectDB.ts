import { connect } from 'mongoose';
 
const databaseURI = "mongodb+srv://anudari:anudari0112@cluster0.hk79mx6.mongodb.net/coffee-shop";
 
export const createConnection = async () => {
  try {
    const connection = await connect(databaseURI);
    console.log('Successfully connected db');
    return connection;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to connect to database');
  }
};
 
let dbConnection: any;
 
export async function connectToDB() {
  if (dbConnection) {
    console.log('Using existing database connection');
    return dbConnection;
  } else {
    console.log('Creating new database connection');
    dbConnection = await createConnection();
    return dbConnection;
  }
}



// import mongoose from "mongoose";

// const connectToDB = async () => {
//   try {
//     const mongoUri =
//       "mongodb+srv://anudari:anudari0112@cluster0.hk79mx6.mongodb.net/coffee-shop";
//     await mongoose.connect(mongoUri);
//     console.log("Connected to Database");
//   } catch (err) {
//     console.log(err);
//   }
// };
// export default connectToDB;
