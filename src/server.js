const app = require('./app');
const config = require('../config/config');
require('dotenv').config();

const PORT = process.env.PORT || 3000;  // Use uppercase PORT for consistency and fallback

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
