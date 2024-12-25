const connectDB = require("./config/db");
const jobRoutes = require("./routes/jobs");
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();


const corsOptions = {
  origin: "http://localhost:5173", // Allow requests from this origin
  methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
  allowedHeaders: ["Content-Type"], // Allowed headers
};

// Enable CORS middleware
app.use(cors(corsOptions));

// Connect to MongoDB
connectDB();

app.use(express.json());

// Your other routes and logic go here...
app.use("/", jobRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
