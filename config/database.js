const mongoose = require('mongoose')

const connectionURI = `mongodb+srv://admin:pepper22@cluster0.esjr1.mongodb.net/teacherspet?retryWrites=true&w=majority`

const db = mongoose.connection;

// module.exports = db

mongoose.connect(process.env.DATABASE_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

db.on('connected', function () {
    console.log(`Connceted to MongoDB at ${db.host}:${db.port}`)
})