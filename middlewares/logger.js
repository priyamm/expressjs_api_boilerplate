module.exports = function(req, res, next) {
  //logger manipulation
  let startTime = +Date.now();
  res.on('finish', function() {
    console.log('Time taken for route ', req.url, ' is ', +Date.now() - startTime + "s");
  })
  next();
}
