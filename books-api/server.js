const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db"); // Import DB connection
const bookRoutes = require("./routes/bookRoutes");

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/books", bookRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Export app for testing
module.exports = app;
