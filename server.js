const express = require("express");
const dotenv = require('dotenv')
const connectDatabase = require('./config/db');
const cors = require('cors');
const mongoose = require('mongoose');

// Configure the environment file
dotenv.config();

const hotelRouter = require("./routes/hotelRouter");
const hoteldataimportRouter = require('./routes/dataimportRouter')
const categoryRouter = require('./routes/categoryRouter');
const categoryimportRouter = require('./routes/categoryimportRouter');
const singlehotelRouter = require('./routes/singlehotelRouter');
const authRouter = require('./routes/authRouter');
const wishlistRouter = require('./routes/wishlistRouter');
const routeNotFound = require('./middleware/routenotFound');

const app = express();

app.use(cors());
app.use(express.json());

// Connect to database
connectDatabase();

const PORT = 3500;

/*app.get('/', (req, res) => {
    res.send("Hello World");
})*/

app.use('/api/hotels', hotelRouter);
app.use('/api/hotelsdata', hoteldataimportRouter);
app.use('/api/hotels', singlehotelRouter);
app.use('/api/category', categoryRouter);
app.use('/api/categorydata', categoryimportRouter);
app.use('/api/auth', authRouter);
app.use('/api/wishlist', wishlistRouter);
app.use(routeNotFound);

mongoose.connection.once("open", () => {
    console.log("Connected to DB");
    app.listen(process.env.PORT || PORT, () => {
      console.log("Server is Up and Running");
    });
  });