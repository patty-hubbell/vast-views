require("dotenv").config();
const express = require("express");
const fetch = require("node-fetch");
const rateLimit = require("express-rate-limit");
var cors = require("cors");
const path = require("path");
const app = express();

app.set("trust proxy", 1);

const limiter = rateLimit({
  windowMs: 1000, // 1 second
  max: 1, // limit each IP to 1 requests per windowMs
});

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));

// apply to all requests
app.use(limiter);

// Allow CORS from any origin
app.use(cors());

// Test route
app.get("/", (req, res) => res.send("Hello World!"));

app.get("/api/random/:orientation/:count", async (req, res) => {
  try {
    const orientation = req.params.orientation;
    const count = req.params.count;

    let apiUrl;

    if (orientation === "portrait") {
      apiUrl = `https://api.unsplash.com/photos/random?client_id=${process.env.UNSPLASH_API_KEY}&count=${count}&query=nature&orientation=portrait`;
    } else if (orientation === "landscape") {
      apiUrl = `https://api.unsplash.com/photos/random?client_id=${process.env.UNSPLASH_API_KEY}&count=${count}&query=nature&orientation=landscape`;
    } else if (orientation === "both") {
      apiUrl = `https://api.unsplash.com/photos/random?client_id=${process.env.UNSPLASH_API_KEY}&count=${count}&query=nature`;
    }

    const response = await fetch(apiUrl);
    const imagesArray = await response.json();

    return res.json({
      success: true,
      imagesArray,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
