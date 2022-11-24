const Agents = require("../models/agent");
const asyncWrapper = require("../middleware/asyncWrapper");
const { createCustomError } = require("../errors/custom-error");
const PDFDocument = require("pdfkit");
const blobStream = require("blob-stream");
const fs = require("fs");
const generatePdf = require("../services/pdf");
// const apcLogo = require("../assets/img/logo.png");

// const imageData2 =
// const imageData = "";

const createPdf = asyncWrapper(async (req, res, next) => {
  const body = req.body;
  console.log("450Q body");
  console.log(body);
  generatePdf();

  res.status(201).json({ msg: "Pdf Created Successfully" });
});

module.exports = {
  createPdf,
};

// generatePdf(
//   body
//   (chunk) => {
//     stream.write(chunk);
//   },
//   () => {
//     stream.end;
//   }
// );
