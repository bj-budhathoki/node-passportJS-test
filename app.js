const express = require('express');
const authRoutes = require('./routes/auth-routes');
const passportConfig = require('./config/passport-setup');
const app = express();
//set up view engine
app.set('view engine', 'ejs');
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
