var mongoose = require('mongoose');

var corgiSchema = new mongose.schema({
 name: {type: String, required: true},
 age: {type: Number, required: true},
 interests: {type: String},
 liked: {type: Boolean, default: false}
});

var Corgi = mongoose.model('Corgi', corgiSchema);
module.exports = Pirate;
