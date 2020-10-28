require("dotenv").config();

const username = process.env.USERNAME;
const password = process.env.PASSWORD;
const cluster = process.env.CLUSTER;
const db_name = process.env.DB_NAME;
const secret = process.env.SECRET;

module.exports = {
  mongoURI: `mongodb+srv://${username}:${password}@${cluster}.g5mqp.mongodb.net/${db_name}?retryWrites=true&w=majority`,
  secret: `${secret}`,
};
