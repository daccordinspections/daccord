const mongoose = require("mongoose");
const slugify  = require('slugify');


const userSchema = new mongoose.Schema({
	name : {
		type : String,
		required : true
	},
	image : {
		type : String,
	},
	cloudinary_id : {
		type : String,
	},
	username: {
		type: String,
		required: true
	},
	phone : {
		type : String,
	},
	isSupperAdmin: {
		type: Boolean,
		default: false
	},
	isDeveloper : {
		type : Boolean,
		default: false
	},
	password: {
		type: String,
		required: true
	},
	createdAt : {
		type : Date,
		default : Date.now
  	},
  	slug : {
		type : String,
		required : true,
		unique : true
  	},
});


userSchema.pre('validate', function(next) {
  if (this.name) {
    this.slug = slugify(this.name, { lower: true, strict: true })
  }

  next()
});


module.exports = mongoose.model('User', userSchema);
