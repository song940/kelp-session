module.exports = function Session(){
  return function(req, res, next){
    next();
  };
};
