const express = require("express");
const dotenv = require('dotenv')
const connectDatabase = require('./config/db');

// Configure the environment file
dotenv.config();

// Connect to database
connectDatabase();

const hotelRouter = require("./routes/hotelRouter");
const hoteldataimportRouter = require('./routes/dataimportRouter')
const categoryRouter = require('./routes/categoryRouter');
const categoryimportRouter = require('./routes/categoryimportRouter');
const singlehotelRouter = require('./routes/singlehotelRouter');
const authRouter = require('./routes/authRouter');
const wishlistRouter = require('./routes/wishlistRouter');
const routeNotFound = require('./middleware/routenotFound');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello World");
})

app.use('/api/hotels', hotelRouter);
app.use('/api/hotelsdata', hoteldataimportRouter);
app.use('/api/hotels', singlehotelRouter);
app.use('/api/category', categoryRouter);
app.use('/api/categorydata', categoryimportRouter);
app.use('/api/auth', authRouter);
app.use('/api/wishlist', wishlistRouter);
app.use(routeNotFound);

app.listen(process.env.PORT, () => {
    console.log("Server is up and running");
})