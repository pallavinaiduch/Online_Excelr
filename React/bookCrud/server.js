require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();  // Create app
let bookRoutes=require('./routes/bookRoutes')
const cors=require('cors');
app.use(express.json()); // Middleware to parse JSON

app.use('/api/books', bookRoutes); // Use book routes
app.use(cors());
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('MongoDB connected');
    app.listen(process.env.PORT || 5000, () => {
        console.log(`Server running on port ${process.env.PORT || 5000}`);
    });
})
.catch(err => {
    console.error('DB connection error:', err.message);
});