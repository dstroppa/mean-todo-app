var mongoose = require('mongoose');

module.exports = mongoose.model('Todo', {
	text : String,
	due : Date,
	done : Boolean
});