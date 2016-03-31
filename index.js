/**
 * [exports description]
 * @param  {[type]} options [description]
 * @return {[type]}         [description]
 */
module.exports = function Session(options){
  options = options || {};
  return function(req, res, next){
    req.sessionId = req.cookies[ 'sid' ];
    var sid = Math.random().toString(35).substr(2, options.length || 32);
    if(!req.sessionId) res.cookie('sid', (req.sessionId = sid));
    next();
  };
};
