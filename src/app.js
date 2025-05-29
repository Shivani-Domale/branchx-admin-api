const express = require('express');
const userRoutes = require('./routes/user.routes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/users', userRoutes); 

// Global error handler middleware must be last
app.use(errorHandler);

module.exports = app;
// Ensure that the environment variables are set    