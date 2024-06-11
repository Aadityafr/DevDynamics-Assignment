const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 6000;

app.use(express.json());

const topicRoutes = require('./routes/topicRoutes');

app.use(express.json());

app.use('/api/topics', topicRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
