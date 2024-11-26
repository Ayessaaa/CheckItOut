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

module.exports = {
  home,
  admin,
  profile
};
