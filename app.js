const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth-routes');
const passportConfig = require('./config/passport-setup');

const app = express();
//set up view engine
app.set('view engine', 'ejs');

//databse connection
mongoose.connect('mongodb://localhost/nodeOauth_test', () => {
   console.log('hurrrrrrrrry ! we are connected with databse');
});

//set up routes
app.use('/auth', authRoutes);
// create home route
app.get('/', (req, res) => {
   res.render('home');
});
// port
const PORT = process.env.port || 4000;
app.listen(PORT, () => {
   console.log(`server running on the port ${PORT}`);
});
