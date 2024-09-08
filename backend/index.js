const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
// const bodyParser = require("body-parser");

// Initialize dotenv
dotenv.config();

// Initialize the app
const app = express();

// Use CORS middleware (after initializing the app)
app.use(cors({
    origin: 'https://school-frontend-9.onrender.com'
}));

// const Routes = require("./routes/route.js"); // Uncomment if needed

// Define the port
const PORT = process.env.PORT || 5000;

// Basic route to test the backend
app.get('/', (req, res) => {
    res.send('Hello, this is the backend!');
});

// Body-parser middleware (express.json replaces body-parser here)
app.use(express.json({ limit: '10mb' }));

// MongoDB connection
mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("NOT CONNECTED TO NETWORK", err));

// Use routes (uncomment if Routes are defined)
// app.use('/', Routes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server started at port no. ${PORT}`);
});
