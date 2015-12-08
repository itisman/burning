/*jslint devel: true, expr:true */ /*globals require: true, process: true, __dirname: true*/
var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var _ = require('underscore');
var Movie = require('./models/movie');
var port = process.env.PORT || 3000;
var app = express();

var mongoURI = "mongodb://localhost:3000";
mongoose.connect(mongoURI);
//MongoDB.on('error', function(err) { console.log(err.message); });
//MongoDB.once('open', function() {
//  console.log("mongodb connection open");
//});


app.set('views', './views/pages');
app.set('view engine', 'jade');
//app.use(express.bodyParser());
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(express['static'](path.join(__dirname, 'public')));
app.locals.moment = require('moment');
app.listen(port);

console.log('server started on port' + port);

// index page
app.get('/', function(req, res) {
    console.log('start get');
    Movie.fetch(function(err, movies){
        if(err){
            console.log(err);
            return;
        }
        console.log(movies);
        res.render('index', {
            title: 'index page',
            movies: movies
        });
    });
    //res.render('index', {
    //    title: 'index page',
    //    movies: [{
    //        title: 'The Runner',
    //        id: 1
    //    }, {
    //        title: 'The Runner 2',
    //        id: 2
    //    }]
    //});
});

// detail page
app.get('/movie/:id', function(req, res) {
    var id = req.params.id;
    console.log(id);
    Movie.findById(id, function(err, movie){
        console.log(movie);
        if(err){
            console.log(err);
            return;
        }
        res.render('detail', {
            title: 'detail page',
            movie: movie
        });
        
    });
    //res.render('detail', {
    //    title: 'detail page',
    //    movie: {
    //        director: 'Roy Atlantis',
    //        country: 'American',
    //        title: 'The Runner',
    //        year: 2014,
    //        lan: 'ENG',
    //        Desc: 'AAAAAAABBBBBBBBBCVCCCCCCCCCC'
    //    }
    //});
});

// admin page
app.get('/admin/movie', function(req, res) {
    res.render('admin', {
        title: 'admin page',
        movie: {
            title: '',
            director: '',
            country: '',
            year: '',
            poster: '',
            language: '',
            desc: ''
        }
    });
});

// admin update movie

app.get('/admin/update/:id', function(req, res){
    var id = req.params.id;
    console.log(id);
    if(id){
        Movie.findById(id, function(err, movie){
            console.log(movie);
            res.render('admin', {
                title: 'imooc update page', 
                movie: movie
            });
        }); 
    }

});
// admin post movie
app.post('/admin/movie/new', function(req, res){
    var id = req.body.movie.id;
    console.log(id);
    var movieObj = req.body.movie;
    var _movie;
    if(id !== undefined && id !== 'undefined'){
        Movie.findById(id, function(err, movie){
            if(err){
                console.log(err);
                return;
            }
            
            _movie = _.extend(movie, movieObj);
            console.log(_movie);
            _movie.save(function(err, movie){
                if(err){
                    console.log(err);
                    return;
                }

                res.redirect('/movie/' + movie.id);
            });
        });
    } else {
        _movie = new Movie({
            director: movieObj.director,
            title: movieObj.title,
            country: movieObj.country,
            lan: movieObj.lan,
            year: movieObj.year,
            desc: movieObj.desc
        }); 

        console.log(_movie);
        _movie.save(function(err){
            console.log(err);
            if(err){
                console.log(err);
                return;
            }

            res.redirect('/movie/' + _movie.id);
        });
    }
});

// list page
app.get('/admin/list', function(req, res) {
    Movie.fetch(function(err, movies){
        if(err){
            console.log(err);
            return;
        }
        res.render('list', {
            title: 'list page',
            movies: movies
        });
    });


    //res.render('list', {
    //    title: 'list page',

    //    movies: [{
    //        director: 'Roy Atlantis',
    //        country: 'American',
    //        title: 'The Runner',
    //        year: 2014,
    //        lan: 'ENG',
    //        Desc: 'AAAAAAABBBBBBBBBCVCCCCCCCCCC'
    //    }, {
    //        director: 'Roy Atlantis',
    //        country: 'American',
    //        title: 'The Runner',
    //        year: 2014,
    //        lan: 'ENG',
    //        Desc: 'AAAAAAABBBBBBBBBCVCCCCCCCCCC'
    //    }]

    //});
});

//list delete movie
app.delete('/admin/list', function(req, res){
    debugger;
    var id = req.query.id;
    console.log(id);
    if(id){
        Movie.remove({_id: id}, function(err){
            if(err){
                console.log(err);
                return;
            }
            res.json({success: 1});
        });
    }
});
