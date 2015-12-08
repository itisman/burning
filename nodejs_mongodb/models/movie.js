/*jslint devel: true, expr:true */ /*globals require: true, module: true*/
var mongoose = require('mongoose');
var MovieSchema = require('../schemas/movie');
var Movie = mongoose.model('Movie',  MovieSchema);

module.exports = Movie;
