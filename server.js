const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const cors = require("cors");
const fs = require('fs');
const path = require('path');

require('dotenv').config({ path: './config/config.env' });

// app
const app = express();

// db
connectDB();

// middleware
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));


//routes middleware
fs.readdirSync('./routes').map((r) => app.use("/api", require('./routes/' + r)));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));