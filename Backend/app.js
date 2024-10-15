const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const comicBookRoutes = require('./routes/comicBookRoutes');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Database connection
mongoose.connect('mongodb+srv://tharunganjai:WmeyKEFmtyn6jGds@cluster0.hhcha.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(() => {
    console.log('Connected to the database');
}).catch((error) => {
    console.log('Database connection error:', error);
});


app.use('/api', comicBookRoutes);


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
