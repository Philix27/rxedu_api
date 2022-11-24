const Agents = require("../models/agent");
const asyncWrapper = require("../middleware/asyncWrapper");
const { createCustomError } = require("../errors/custom-error");
const PDFDocument = require("pdfkit");
const blobStream = require("blob-stream");
const fs = require("fs");
const generatePdf = require("../services/pdf");

const createPdf = asyncWrapper(async (req, res, next) => {
  const stream = res.writeHead(200, {
    "Content-Type": "application/pdf",
    // "Content-Disposition": "attachment;filename=membership_card.pdf",
  });

  console.log("450Q body");
  const body = req.body;
  console.log(body);

  const doc = new PDFDocument({
    title: "Membership Card",
    Author: "Felix Eligbue",
    font: "Courier",
    printing: "highResolution",
    copying: "false",
    modifying: "false",
    size: [242.64, 153],
    margin: 10,
  });

  doc.on("data", (chunk) => {
    stream.write(chunk);
  });
  doc.on("end", () => {
    stream.end;
  });

  // doc.pipe(fs.createWriteStream("outfile.pdf"));
  // const stream = doc.pipe(blobStream());
  doc.fontSize(8);
  doc.font("Times-Roman");

  doc.text("ALL PROGRESSIVES CONGRESS (APC)", {
    align: "center",
  });
  doc.fontSize(6).text("JUSTICE, PEACE & UNITY", {
    align: "center",
  });

  doc.moveDown();
  doc.moveDown();
  //   doc.text(
  //     `
  // NAME: ${body.name}
  // STATE: ${body.state}
  // LGA: ${body.lga}
  // WARD: ${body.ward}
  // DOB: ${body.dob}
  // NIN: ${body.nin}
  // MEM. No.: ${body.membershipCode}
  // `,
  //     {
  //       align: "left",
  //     }
  //   );

  doc.image(apcLogo, 320, 145, { width: 200, height: 100 });
  doc.moveDown();
  doc.moveDown();
  doc.fontSize(4).text("APC MEMBERSHIP CARD", {
    align: "center",
  });
  doc.end();

  return res.status(201).json({ msg: "Pdf Created Successfully" });
});

module.exports = {
  createPdf,
};
