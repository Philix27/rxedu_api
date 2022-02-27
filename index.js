require('dotenv').config()
require('express-async-errors');
const express = require('express');
const cors = require('cors');
const app = express();
const connectDB = require('./db/mongoose_connect')
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');
//? Routes
const mcq = require("./routes/mcq")
const article = require("./routes/article")

//! Remove Nodemon from Dependency when data is avaliable
//! Remove Nodemon from Dependency when data is avaliable
//! Leave Nodemon in Dev-Dependency
//! Leave Nodemon in Dev-Dependency
//! Run npm i
//! Delete Comment


const port = process.env.PORT || 3007;
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`Success - Server is runnuing on port: ${port}`))

    } catch (error) {
        console.log(error);
    }
}

start();

//? Middleware
app.use(express.json());
app.use(express.static('./public'));
app.use(cors());

app.use(function (req, res, next){
   res.header("Access-Control-Allow-Origin", "*"); 
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-with, Content-Type, Accept");
   next(); 
})

//? Routes
app.use('/api/v1/mcq', mcq)
app.use('/api/v1/articles', article)

//? Error Managers
app.use(notFound);
app.use(errorHandlerMiddleware);

