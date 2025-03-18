const express = require('express');
const dishesRoutes = require('./routes/dishesRoutes'); // Importing routes
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://yashb150603:yashb150603@foodcommerce.nvmgy.mongodb.net/')
  .then(() => console.log('Connected!'));

const app = express();
const port = 5000;
app.use(cors()); 
app.use(express.json()); // Correct usage

// app.use((req,res,next)=>{
//   console.log("Time: ", Date.now());
//   next();
// });

app.use('/api', dishesRoutes); // Using the routes

app.use("/api", userRoutes);



app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});