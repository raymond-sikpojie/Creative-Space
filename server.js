const express = require("express");
const path = require("path");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

app.use(express.json({ extended: false }));
app.use(cors());

// Specify which directory from which to load static files
app.use(express.static("assets"));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "assets", "index.html"));
});

const route = __dirname;
console.log(route);

// Set up nodemailer
const sendMail = (msg) => {
  let transporter = nodemailer.createTransport({
    service: "gmail.com",
    // port: 587,
    // secure: false,
    auth: {
      user: "raymondomon@gmail.com",
      pass: "bojanglesthedrunkenmaster",
    },
  });

  let message = {
    from: "raymondomon@gmail.com",
    to: "raymondomon@yahoo.com",
    subject: "Hello, from the other side",
    text: `${msg}`,
    // html: "<p>HTML version of the message</p>"
  };

  transporter.sendMail(message, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`Email sent, ${info.response}`);
    }
  });
};
// sendMail();

// set up array ot hold data

const data = [];

app.post("/", (req, res) => {
  // res.send("Data received");
  res.send({ msg: "Your message has been sent!" });
  const { name, email, number, message } = req.body;
  const userInfo = `Message from ${name}, with email ${email} and phone number ${number}. Message: ${message}`;
  sendMail(userInfo);

  // console.log(userInfo);
});

// Set up server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
