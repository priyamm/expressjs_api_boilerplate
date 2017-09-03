module.exports = function(app, db) {
  app.get('/directory', function(req, res) {
    res.send("Directory")
  })
}
