const http    = require('http');
const kelp    = require('kelp');
const cookie  = require('kelp-cookie');
const session = require('../');

const app = kelp();

app.use(cookie, session());
app.use(function(req, res, next){
  res.end('session id: ' + req.sessionId);
});

http.createServer(app).listen(3000);
