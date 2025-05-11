import express, { json, urlencoded } from 'express'
import mongoose from 'mongoose';
import { userRouter } from './routes/user.routes.mjs';



const PORT = 5000
const app = express();


app.listen(PORT, () => {
  console.log(
    `***Server Connected @ PORT:5000 => http://localhost:${PORT} ***`
  );
});

app.use(json());
app.use(urlencoded())
userRouter(app)

mongoose.connect("mongodb://localhost:27017/hrb-ytclone").then(() => {
    console.log("Successfully connected to the MongoDB data base");
    
}).catch(() => {
    console.log("Something Went Wrong - Data base not connected ")
});;