// Import express so we can create our server
const express = require("express");

// Import cors so frontend can talk to backend
const cors = require("cors");

// Create express application
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Roots and Recipes API is running!");
});

// Choose port number
const PORT = 3000;

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});