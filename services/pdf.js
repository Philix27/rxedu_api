const PDFDocument = require("pdfkit");
const blobStream = require("blob-stream");
const fs = require("fs");

const generatePdf = (body, dataCallback, endCallback) => {
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
  doc.text(
    `
NAME: ${body.name}
STATE: ${body.state}
LGA: ${body.lga}
WARD: ${body.ward}
DOB: ${body.dob}
NIN: ${body.nin}
MEM. No.: ${body.membershipCode} 
`,
    {
      align: "left",
    }
  );

  doc.image(apcLogo, 320, 145, { width: 200, height: 100 });
  doc.moveDown();
  doc.moveDown();
  doc.fontSize(4).text("APC MEMBERSHIP CARD", {
    align: "center",
  });

  // doc.on("data", dataCallback);
  // doc.on("end", endCallback);
  doc.end();
};

// doc
//   .image("assets/logo.png", 320, 145, { width: 200, height: 100 })
//   .text("Stretch", 320, 130);

// stream.on("finish", function () {
//   // get a blob you can do whatever you like with
//   const blob = stream.toBlob("application/pdf");

//   // or get a blob URL for display in the browser
//   const url = stream.toBlobURL("application/pdf");
//   iframe.src = url;
// });

module.exports = generatePdf;
