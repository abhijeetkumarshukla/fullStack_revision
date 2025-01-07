const mongoose = require('mongoose');

const MONGO_URL= 'mongodb+srv://shuklaabhijeet510:XFhdLrquiBKiapxy@cluster0.vtawt.mongodb.net/?retryWrites=true&w=majority&appName=login'
const connection = mongoose.connect(MONGO_URL)

module.exports = connection;

// password atles 'XFhdLrquiBKiapxy' 