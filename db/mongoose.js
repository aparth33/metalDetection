const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://admin:admin@cluster0.kvqew.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});