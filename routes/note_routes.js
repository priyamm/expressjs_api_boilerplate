const ObjectID = require('mongodb').ObjectID

module.exports = function(app, db) {

  //FETCH OPERATION
    app.get('/note/:id', function(req, res) {
      console.log("param:", req.params.id);
      db.collection('notes').find({"id" : req.params.id}).toArray((err, note) => {
        if(err)
          res.send('Err in fetching document occur');
        else {
          res.json(note);
      }
      })
    });

  //POST OPERATION
  app.post('/note', function(req, res) {
    console.log(JSON.stringify(req.body));
    db.collection('notes').insert(req.body, (err, note) => {
      if(err)
        res.send('Err in saving document occur');
      else {
        res.send(note);
      }
    })
  })

//DELETE OPERATION
  app.delete('/note/:id', function(req, res) {
    console.log("param:", req.params.id);
    const id = new ObjectID(req.params.id)
    db.collection('notes').remove({"note" : id}, (err, note) => {
      if(err)
        res.send('Err in fetching document occur');
      else {
        res.json(note);
    }
    })
  });

  //UPDATE OPERATION
  app.put('/note/:id', function(req, res) {
    const details = {
      name : req.body.name,
      age : req.body.age
    }
    db.collection('notes').update({"_id" : new ObjectID(req.params.id)},
      details, (err, note) => {
      if(err)
        res.send('Err in fetching document occur');
      else {
        res.json(note);
    }
    })
  });
};
