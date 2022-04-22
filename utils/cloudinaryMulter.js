const multer = require("multer");
const cloudinary = require("cloudinary");
const cloudinaryStorage = require("multer-storage-cloudinary");
var Person = require('../models/person')

cloudinary.config({
    cloud_name: 'bits-goa-metal-detection',
    api_key: '357279137272785',
    api_secret: '8f7iXoUKSej1lx0qoTx67R6mwWc'
});

const storage = cloudinaryStorage({
    cloudinary: cloudinary,
    folder: "bits-goa-metal-detection",
    allowedFormats: ["jpg", "jpeg", "png"],
    transformation: [{
        width: 500,
        height: 500,
        crop: "limit"
    }]
});

const parser = multer({
    storage: storage
});

module.exports = {
    parser
}