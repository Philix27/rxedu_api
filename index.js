const express = require('express');
const cors = require('cors');
const app = express();
const mcq_pcl = require("./routes/mcq_pcl")
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

//? ROUTES
app.get('/hello', async (req, res) => {
    
    res.send("Welcome to home");
});


app.post(("/create", async (req, res) => {
    const data = req.body.data;
    res.send({"msg": "Question Added"})
    await Question.add(data);
}));
//? From Task Route File
// app.use('/api/v1/tasks', tasks)
// app.use('/api/v1/questions', Question)
app.use('/api/v1/blogs', blogs)
app.use('/api/v1/products', products)
app.use('/api/v1/drugs', drugs)
app.use('/api/v1/mcq_pcl', mcq_pcl)
app.use(notFound);

