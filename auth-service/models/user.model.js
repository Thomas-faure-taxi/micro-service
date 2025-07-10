const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true // assure l’unicité côté MongoDB
  },
  password: {
    type: String,
    required: true
  }
});

// Active le plugin pour afficher des messages d’erreur clairs
UserSchema.plugin(uniqueValidator, { message: '{PATH} est déjà utilisé.' });

module.exports = mongoose.model('User', UserSchema);
