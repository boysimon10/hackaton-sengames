const express = require('express');
require('./config/db');
const app = express();

const dotenv = require('dotenv');
dotenv.config({ path: './config/.env' });


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
