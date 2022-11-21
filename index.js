require("dotenv").config();
require("express-async-errors");
const express = require("express");
const cors = require("cors");
const app = express();
const connectDB = require("./db/mongoose_connect");
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

//? Routes
const mcq = require("./routes/mcq");
const mcq_pep = require("./routes/mcq_pep");
const article = require("./routes/article");
const articleCategory = require("./routes/articles_category");
const mcqCategory = require("./routes/mcq_category");
const user = require("./routes/user");
const pepNote = require("./routes/pepNote");
const pepMcq = require("./routes/pepMcq");
const news = require("./routes/news");
const pepMcqDemo = require("./routes/pepMcqDemo");
const brandDrugs = require("./routes/brand");
const genericDrugs = require("./routes/generic");
const agent = require("./routes/agent");
const member = require("./routes/member");
const pdfloader = require("./routes/pdf");
const agentByState = require("./routes/agentByState");

//! Remove Nodemon from Dependency when data is avaliable
//! Leave Nodemon in Dev-Dependency
//! Run npm i
//! Delete Comment

const port = process.env.PORT || 3007;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(
      port,
      console.log(`Success - Server is runnuing on port: ${port}`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();

app.get("/", (req, res) => {
  res.send("Reached Rxedu API");
});
//? Middleware
app.use(express.json());
app.use(express.static("./public"));
app.use(cors());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-with, Content-Type, Accept"
  );
  next();
});

//? Routes
app.use("/api/v1/mcq", mcq);
app.use("/api/v1/mcq_pep", mcq_pep);
app.use("/api/v1/articles", article);
app.use("/api/v1/articles_category", articleCategory);
app.use("/api/v1/mcq_category", mcqCategory);
app.use("/api/v1/user", user);
app.use("/api/v1/pep_note", pepNote);
app.use("/api/v1/pep_mcq", pepMcq);
app.use("/api/v1/pep_mcq_demo", pepMcqDemo);
app.use("/api/v1/blogs", news);
app.use("/api/v1/brand_drugs", brandDrugs);
app.use("/api/v1/generic_drugs", genericDrugs);
app.use("/api/v1/agent", agent);
app.use("/api/v1/agents_by_state", agentByState);
app.use("/api/v1/member", member);
app.use("/api/v1/pdfloader", pdfloader);

//? Error Managers
app.use(notFound);
app.use(errorHandlerMiddleware);

// http://localhost:3000/api/staterep/add
