const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://harshitjoshi1706:5PnEgwqPnrOQTlVE@cluster0.zfriovq.mongodb.net/Moviecorner?retryWrites=true&w=majority&appName=AtlasApp"

const connectToMongo = async () => {
try {
    mongoose.set('strictQuery', false)
    mongoose.connect(mongoURI) 
    console.log('Mongo connected')
}
catch(error) {
    console.log(error)
    process.exit()
}
}
module.exports = connectToMongo;
