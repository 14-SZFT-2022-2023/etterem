require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/food', require('./routes/foodRoutes'));

const PORT = process.env.PORT || 3500;

mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URI, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Sikeres csatlakozás!');
        app.listen(PORT, () => {
            console.log(`http://localhost:${PORT}`);
        });
    }
});
