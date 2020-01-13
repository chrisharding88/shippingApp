var mongoose = require("mongoose"); 

var Schema = mongoose.Schema;


var logInSchema = new Schema ({
    username:{type:String, required: true},
    password:{type:String, required: true}
})

var LogIn = mongoose.model("Jobs", logInSchema);

module.exports = LogIn;