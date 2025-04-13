const express = require("express");
const dotenv =require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const authRouter = require("./routes/auth")

dotenv.config();
const app = express();

//MIDDLEWARES
app.use(cors());
app.use(express.json());


//Router

app.use("/auth", authRouter);

//Database connection

const DB = process.env.DB;
mongoose.connect(DB).then(()=>{
    console.log("DB connection is successful");
}).catch((err)=>{
    console.log(err);
})

//SERVER

const PORT = process.env.PORT;
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})
