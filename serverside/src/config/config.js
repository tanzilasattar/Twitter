const path = require("path");
// automatically loads environment variables from a . env file into the process
const dotenv = require("dotenv");
dotenv.config({ path: path.join(__dirname, "../../.env") });

const config = {
  app: {
    port: process.env.PORT,
  },
  db: {
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database,
  },
  jwt: {
    JWT_SECRET: process.env.JWT_SECRET,
  },
};
module.exports = config;