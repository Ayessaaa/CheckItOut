const { render } = require("ejs");

const home = (req, res) => {
  res.render('index');
};

const admin = (req, res) => {
  res.render('admin');
};

const profile = (req, res) => {
  res.render('profile');
};

const book = (req, res) => {
  res.render('book');
};

const users = (req, res) => {
  res.render('users');
};

module.exports = {
  home,
  admin,
  profile,
  book,
  users
};
