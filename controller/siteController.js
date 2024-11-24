const { render } = require("ejs");

const home = (req, res) => {
  res.render('index');
};

module.exports = {
  home,
};
