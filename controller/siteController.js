const { render } = require("ejs");

const home = (req, res) => {
  res.render('index');
};

const admin = (req, res) => {
  res.render('admin');
};

module.exports = {
  home,
  admin
};
