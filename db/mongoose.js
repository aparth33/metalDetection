const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://ishant:ishant@cluster0.zghfh.mongodb.net/disaster_management?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});