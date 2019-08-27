const List = require("../models/List");

module.exports = {
  newList
};

async function newList(req, res) {
  try {
    var newItem = new List(req.body);
    return newItem.save().then(list => {
      res.status(200).json(list);
    });
  } catch (err) {
    console.log("error in newList mongoose", err);
  }
}
