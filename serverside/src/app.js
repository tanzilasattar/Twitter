var express = require("express");
var app = express();
const cors = require('cors');
const bodyParser = require("body-parser");
// It helps in saving the data in the key-value form
const session = require('express-session');
const userRoute = require('./routes/user.route');

// Parses the text as URL encoded data 
// (which is how browsers tend to send form data from regular forms set to POST)
app.use(bodyParser.urlencoded({ extended:false }));

// returns middleware that only parses json
app.use(bodyParser.json());

// session is established on the server-side
app.use(session({
  secret:'keyboard cat',
  resave:false,
  saveUninitialized:false,
  cookie: { secure: false , maxAge:60000}
}))
// determines which origins are allowed to access server resources over CORS
app.use(cors({
  origin: 'http://127.0.0.1:5500',  
  methods: ["GET","POST"],
}))
app.use("/user", userRoute);
// app.use("/user", userRoute);


app.get('/sess',(req,res)=>{
  req.session.sess ? req.session.sess++ : req.session.sess=1;
  res.send(req.session.sess.toString()); 
})

module.exports = app;