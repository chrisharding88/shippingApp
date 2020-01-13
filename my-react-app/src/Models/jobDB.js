import React from 'react';

var mongoose = require("mongoose"); 

//Save a reference to Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a formSchema object

var jobSchema = new Schema ({
    firstName: {type:String, required: true},
    lastName: {type:String, required: true},
    address: {type:String, required: true},
    city: {type:String, required: true},
    state: {type:String, required: true},
    zip: {type:Number, required: true},
    barrelQuantity: {type:Number, required: true},
    country: {type:String, required: true}
})

var JobList = mongoose.model("Jobs", jobSchema);

module.exports = JobList;