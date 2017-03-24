console.log('users model');

var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  name: {type: String, required: true, minlength: 3},
  created_at  :{ type: Date, default: Date.now },
	polls :[{ type: mongoose.Schema.Types.Mixed, ref: "Poll" }],
}, {timestamps: true});

var User = mongoose.model('User', userSchema);
