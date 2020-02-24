const data = require("../data/helpers/projectModel");
function validateProjectId(req, res, next) {
  const { id } = req.params;
  data
    .get(id)
    .then(project => {
      if (!project) {
        res.status(404).json({ errorMessage: "Sorry, we can't find that project." });
      } else {
        next();
      }
    })
    .catch(err => {
      console.log(err);
    });
}
module.exports = { validateProjectId };
