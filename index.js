// ------ In node js there are 3 types of module ------
// 1. Local Module -> different files are export import is local module
// 2. Core Module -> http, url, fs, events, path etc.
// 3. Third Party Module -> thats i install via npm

const http = require("http");
const url = require("url");
const fs = require("fs");
const events = require("events");

// ----- Create Server using HTTP ------
// const server = http.createServer((req, res) => {
//   // server
//   //   res.end("Hello Node Js");
// //   console.log(req.url);
//     if (req.url == "/") {
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.write("<p>This is Home Page</p>");
//       res.end();
//     }
// });

// ----- Create URL -----
// const server = http.createServer((req, res) => {
//   const addressUrl = "http://localhost:5000/contact?name=hridoy&country=bangladesh";
//   const passedUrl = url.parse(addressUrl, true);
//   const queryObject = passedUrl.hostname;
//   console.log(queryObject);
// })

// ------- Read and Write File (fs) -------
// const server = http.createServer((req, res) => {
//   if (req.url == "/") {

// ---- Read File Asynchronous ----
//  fs.readFile("data.txt", (err, data) => {
//    if (err) {
//      res.write("data read failed");
//      res.end();
//    } else {
//      res.write(data);
//      res.end();
//    }
//  });

// ---- Read File Synchronous ----
//  const data = fs.readFileSync("data.txt");
//  res.write(data);
//  res.end();

// ---- Write File Asynchronous ----
//  fs.writeFile("newData.txt", "Hello Mim", (err) => {
//    if (err) {
//      res.write("Data write failed");
//      res.end();
//    } else {
//      res.write("data written successfully");
//      res.end();
//    }
//  });
//   }
// });

// const PORT = 5000;
// server.listen(PORT);
// console.log(`Server is running at ${PORT}`);

// ------ Create Events ------
// const eventEmitter = new events.EventEmitter();
// const chitkarDibo = () => {
//   console.log("Oi beta koi tui...???? ami darai achi....");
// };

// eventEmitter.on("scream", chitkarDibo);
// eventEmitter.emit("scream");

// ------ Stream and Buffer ------
const readStream = fs.createReadStream("./data.txt");

readStream.on("data", (chunk) => {
  console.log("...........................");
  console.log(chunk);
});

readStream.on("open", () => {
  console.log("Stream is open");
});

setTimeout(() => {
  readStream.pause();
  console.log("Stream is pause");
}, 15);

setTimeout(() => {
  readStream.resume();
  console.log("Stream is resume");
}, 6000);
