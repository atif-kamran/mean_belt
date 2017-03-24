var mongoose = require('mongoose');

var pollSchema = mongoose.Schema({
	user_id  :{ type: mongoose.Schema.Types.ObjectId, ref: "User"},
	question :String,
  option_1 :String,
  option_2 :String,
  option_3 :String,
  option_4 :String,
	vote        :Number,
	created_at  :{ type: Date, default: Date.now }
})

var Poll = mongoose.model('Poll', pollSchema);
