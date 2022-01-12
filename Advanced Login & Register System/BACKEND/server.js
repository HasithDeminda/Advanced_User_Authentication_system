// require('dotenv').config()
// const express = require('express')
// const mongoose = require('mongoose')
// const cors = require('cors')
// const cookieParser = require('cookie-parser')
// const fileUpload = require('express-fileupload')


// const app = express()
// app.use(express.json())
// app.use(cors())
// app.use(cookieParser())
// app.use(fileUpload({
//     useTempFiles: true
// }))

// //Routes
// app.use('/user', require('./routes/userRouter'))
// app.use('/api', require('./routes/upload'))

// //MongoDB Connection
// const URI = process.env.MONGODB_URL
// mongoose.connect(URI, {
//     // useCreateIndex: true,
//     // useFindAndModify: false,
//     // useNewUrlParser: true,
//     // useUnifiedTopology: true
// });

// // app.use('/', (req, res, next)=>{
// //     res.json({msg:"Hello Everyone!"})
// // })

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(`Server is up and running on port : ${PORT}`)
// })
// //MongoDB
// const connection = mongoose.connection;
// connection.once("open",() => { 
//     console.log("MongoDB Connection Successful!");
// })

///////////////////////////////////////////////////////////////////////////////////////////////////////
const express = require("express"); 

const mongoose = require("mongoose");

const bodyParser = require("body-parser");

const cors = require("cors");

const dotenv = require("dotenv");

const app = express();

require("dotenv").config();

const cookieParser = require('cookie-parser')
const fileUpload = require('express-fileupload')


app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use(fileUpload({
    useTempFiles: true
}))

const PORT = process.env.PORT || 5000;

app.use(cors());

app.use(bodyParser.json());



const URL = process.env.MONGODB_URL;

app.use('/user', require('./routes/userRouter'))
app.use('/api', require('./routes/upload'))


mongoose.connect(URL,{

    // useCreateIndex: true,

    // useNewUrlParser: true,

    // useUnifiedTopology: true,

    // useFindAndModify: false

})



const connection = mongoose.connection;

connection.once("open", () => {

    console.log("MongoDB connect successfully!");

})








app.listen(PORT, () => {

    console.log(`Server is up and running on port ${PORT}`);

})