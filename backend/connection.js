const mongoose = require('mongoose')


async function connectToMongoDB() {
    return mongoose.connect("mongodb://localhost:27017/dashboard")
        .then(() => {
            console.log("database connected")
        })
        .catch((err) => {
            console.log(err)
        })
}

module.exports = {
    connectToMongoDB,
};