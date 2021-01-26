const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose')

let PORT = process.env.PORT || 3000;
let db = require('./models');

let app = express();
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static('public'));

require('./routes/api-routes');
require('./routes/html-routes');

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/custommethoddb',
    { useNewUrlParser: true}
);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
})