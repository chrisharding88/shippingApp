import express from 'express';
import passport from 'passport';
import bodyParser from 'body-parser'
import Cors from 'cors'

const app = express();

const API_PORT = process.env.API_PORT || 3000;

require('.config/passport');

app.use(Cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(passport.initialize());

require('./routes/loginUser')(app)
require('./routes/registerUser')(app)
require('./routes/findUsers')(app)
require('./routes/deleteUser')(app)
require('./routes/updateUser')(app);

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));

module.exports = app;



