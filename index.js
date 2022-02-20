const express = require('express');
const cors = require('cors');
const app = express();
const mcq = require("./routes/mcq")
const connectDB = require('./db/mongoose_connect')
const notFound = require('./middleware/not-found');

const Question = require('./db/firebase_config');

require('dotenv').config()

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


// app.post(("/create", async (req, res) => {
//     const data = req.body.data;
//     res.send({"msg": "Question Added"})
//     await Question.add(data);
// }));

//? From Task Route File
app.use('/api/v1/mcq', mcq)
app.use(notFound);

