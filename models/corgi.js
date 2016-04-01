var mongoose = require('mongoose');

var corgiSchema = new mongoose.Schema({
 name: {type: String, required: true},
 age: {type: Number, required: true},
 interests: {type: String},
 liked: {type: Boolean, default: false},
 image: {type: 'String', default: 'https://41.media.tumblr.com/3fb4f1951625779d103c7223973268ae/tumblr_nwxmre4gxi1sz1mubo1_400.png'}
});

var Corgi = mongoose.model('Corgi', corgiSchema);
module.exports = Corgi;
