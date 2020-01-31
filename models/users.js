const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,  
        required: true,
    },
    email: {
        type: String,
        trim: true,
        required: true
    },
    password: {
        type: String,
        trim: true,
        required: true
    }
});

UserSchema.pre('save', function(next){
    this.password = bcrypt.hashSync(this.password, 10);
    next();
});

module.exports = mongoose.model('User', UserSchema);