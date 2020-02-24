const data = require("../data/helpers/actionModel");

function validateActionId(req, res, next) {
  const { id } = req.params;
  data
    .get(id)
    .then(action => {
      if (!action) {
        res.status(404).json({ errorMessage: "Sorry, we can't find that action." });
      } else {
        next();
      }
    })
    .catch(err => {
      console.log(err);
    });
}

module.exports = { validateActionId };
