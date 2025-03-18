const express = require('express');
const dishesRoutes = require('./routes/dishesRoutes');
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");

const mongoose = require('mongoose');

// MongoDB connection
mongoose.connect('mongodb+srv://yashb150603:yashb150603@foodcommerce.nvmgy.mongodb.net/')
  .then(() => console.log('Connected!'));

const app = express();
const port = 5000;

// Allow requests only from the frontend (replace 'http://localhost:3000' with your frontend URL)
const corsOptions = {
  origin: 'https://ecommerce-food-app-main.vercel.app',  // Replace with your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions)); // Apply the CORS options

app.use(express.json()); // Correct usage

// app.use((req, res, next) => {
//   console.log("Time: ", Date.now());
//   next();
// });

app.use('/api', dishesRoutes); // Using the routes
app.use("/api", userRoutes);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
