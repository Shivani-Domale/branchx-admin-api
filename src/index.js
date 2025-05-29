
require('dotenv').config();
const express = require('express');
const apiRoutes = require('./routes');
const adminRoutes = require('./routes/admin.routes');
const { ServerConfig,Logger } = require('./config');

const app = express();

app.use(express.json());

app.use("/api",apiRoutes);
app.use('/admin', adminRoutes);


app.listen(ServerConfig.PORT, () => {
Logger.info(`Server is running on port ${ServerConfig.PORT}`);
});