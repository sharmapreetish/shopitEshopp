const mongoose = require('mongoose');


const connectDatabase = () => {
    mongoose.connect('mongodb+srv://preet:preet@mern.03c9ysp.mongodb.net/shopit?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
        // useCreateIndex: true
    }).then(con => {
        console.log(`MongoDB Database connected with HOST: ${con.connection.host}`)
    })
}


module.exports = connectDatabase;