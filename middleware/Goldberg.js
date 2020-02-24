//Get it? Cuz Joe's a stalker lol :D 
//Dexter stalked but it wasn't his main goal as it is Joe's. 
//Makes it a better name for logger fuction imo


function Goldberg  (req, res, next) {
  console.log(`${req.method} to url: ${req.url} at ${Date()}`);
  next();
};

module.exports = Goldberg;
