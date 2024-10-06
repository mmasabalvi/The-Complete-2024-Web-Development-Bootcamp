import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    
    
    
    res.render("views/index.ejs", 
        {
            dayType: "a weekday",
            advice: "It's time to work hard."
        }
    )
})


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });