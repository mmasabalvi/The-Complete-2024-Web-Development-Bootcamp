import express from "express";
const app = express();
const port = 3000; //location of the server
                   // think of it like a door no. 3000 on the server

app.get("/", (req, res) => {  //"/" for root directory
  res.send("Hello World");
})

app.listen(port, () => {
  console.log(`Server running on port ${port}.`); //callback function when server running
});
