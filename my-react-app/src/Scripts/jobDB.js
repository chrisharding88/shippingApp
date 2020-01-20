const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect(process.env.MONGOD_URI || 'mongodb: //localhost/jobslist');

const seed = [];

db.Job
	.remove({})
	.then(() => db.Job.collection.insertMany(seed))
	.then((data) => {
		console.log(data.result.n + 'job inserted!');
		process.exit(0);
	})
	.catch((err) => {
		console.error(err);
		process.exit(1);
	});
