const mongoose = require('mongoose');
const AuthorSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: [true, 'Required field'],
        minlength: [3, 'Name must be at least {MINLENGTH} characters']
    }
}, { timestamps: true });
module.exports.Author = mongoose.model('Author', AuthorSchema);