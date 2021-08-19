const express = require('express');
const mongoose = require('mongoose');
const User = require('./model/User')
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser')
const app = express()
const flash = require('connect-flash');
const session = require('express-session')


const ejs = require('ejs');
const path = require('path');
const { json } = require('body-parser');


const PORT = process.env.PORT || 3000

mongoose.connect('mongodb+srv://sumit:8055@cluster0.nuh3e.mongodb.net/user', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))
app.use(flash());


// set ejs Template
app.use(express.static("public"));
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.render('home')
});

app.get('/contact', (req, res) => {
  res.render('contact')
});

app.post('/contact',async(req, res) => {
  const user =await new User({
    fullname:req.body.fullname,
    email:req.body.email,
    number: req.body.number,
    message:req.body.message
  }).save()
  req.flash('message','successMessage')
  res.status(201).redirect('/')

});

app.get('/about', (req, res) => {
  res.render('about')
});

app.get('/service', (req, res) => {
  res.render('service')
});

app.listen(PORT, () => {
  console.log(`app is listening to PORT ${PORT}`)
})