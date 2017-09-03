const notesRoutes = require('./note_routes');
const notes_directory = require('./notes_directory')

module.exports = function(app, db) {
  notesRoutes(app, db);
  notes_directory(app, db)
}
