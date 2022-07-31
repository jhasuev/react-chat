/*
users:
  id
  login
  password
  created
*/

module.exports = (req, res) => {
  console.log("Router Working");
  res.json('["works"]');
}