require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const UserRoutes = require('./routes/UserRoutes');

const app = express();
app.use(bodyParser.json());


// Test .env
console.log('MONGODB_URI:', process.env.MONGODB_URI);
console.log('SECRET_KEY:', process.env.SECRET_KEY);


// Get environment variables
const uri = process.env.MONGODB_URI;
const secretKey = process.env.SECRET_KEY;


// Check URI and secretKey
if (!uri) {
  console.error('error: undefined MONGODB_URI');
  process.exit(1);
}
if (!secretKey) {
  console.error('error: undefined SECRET_KEY');
  process.exit(1);
}

// connect to MongoDB
mongoose.connect(uri)
  .then(() => console.log('success: connected to MongoDB'))
  .catch(err => console.error('fail connected to MongoDB', err));

// 使用 UserRoutes
app.use('/api/users', UserRoutes);

// start server in env.PORT or 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server is running ${PORT}`);
});
