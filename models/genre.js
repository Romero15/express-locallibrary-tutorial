var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GenreSchema = new Schema(
  {
    name: {type: String, required: true, min: 3, max: 100}
  }
);

// Virtual genre name
GenreSchema
.virtual('url')
.get(function () {
  return '/catalog/genre/'+this.id;
});

//Export model
module.exports = mongoose.model('Genre', GenreSchema);