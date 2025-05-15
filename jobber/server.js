const express = require("express");
const cors = require("cors");

const app = express();
const port = 9002;

// Middleware
app.use(cors());
app.use(express.json());

// Basic route
app.get("/", (req, res) => {
  res.json({ message: "Jobber server is running" });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// https://api.getjobber.com/api/oauth/authorize?response_type=code&client_id=026b6f35-e4d4-49e5-a842-8fb5bed6bbc7&redirect_uri=https%3A%2F%2Ffizz.ngrok.io&state=TX
