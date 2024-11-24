// index.js
const express = require("express");
const path = require("path");
const app = express();

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, "public")));

// Define a basic route
app.get("/", (req, res) => {
  res.send(``);
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
