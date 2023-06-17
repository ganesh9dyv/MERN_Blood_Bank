const express = require("express");
const dotenv=require('dotenv');
const colors=require('colors');
const cors=require('cors');
const morgan=require('morgan');
const connectDB = require("./config/db");
// dot config
dotenv.config();

// mongoDb connection
connectDB()
// rest object
const app=express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

//routes 
app.use('/api/v1/test',require('./routes/testRoute'));
app.use('/api/v1/auth',require('./routes/authRoutes'));

// port
const PORT=process.env.PORT || 8080;
//listen
app.listen(PORT,()=>{
    console.log(`Node Server running in ${process.env.DEV_MODE} mode on port ${PORT}`
        .bgBlue.white
    );
})
