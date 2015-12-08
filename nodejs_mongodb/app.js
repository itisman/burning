/*jslint devel: true, expr:true */ /*globals require: true, process: true, __dirname: true*/
var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var _ = require('underscore');
var Movie = require('./models/movie');
var port = process.env.PORT || 3000;
var app = express();

var mongoURI = "mongodb://localhost:3000";
var MongoDB = mongoose.connect(mongoURI).connection;
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
app.use(express['static'](path.join(__dirname, 'bower_components')));
app.listen(port);

console.log('server started on port' + port);

// index page
app.get('/', function(req, res) {
    console.log('start get');
    Movie.fetch(function(err, movies){
        if(err){
            console.log(err);
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
    debugger;
    var id = req.params.id;
    Movie.findById(id, function(err, movie){
        debugger;
        console.log(movie);
        if(err){
            console.log(err);
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
    debugger;
    console.log();
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

app.post('/admin/update/:id', function(req, res){
    debugger;
    console.log();
    var id = req.params.id;
    if(id){
        Movie.findById(id, function(err, movie){
            res.render('admin', {
                title: 'imooc update page', 
                movie: movie
            });
        }); 
    }

});
// admin post movie
app.post('/admin/movie/new', function(req, res){
    debugger;
    console.log();
    var id = req.body.movie.id;
    var movieObj = req.body.movie;
    var _movie;
    if(id !== undefined && id !== 'undefined'){
        Movie.findById(id, function(err, movie){
            if(err){
                console.log(err);
            }
            
            _movie = _.extend(movie, movieObj);
            debugger;
            console.log(_movie);
            _movie.save(function(err, movie){
                if(err){
                    console.log(err);
                }

                res.redirect('/movie/' + movie.id);
            });
        });
    } else {
        _movie = new Movie({
            director: movieObj.director,
            title: movieObj.title,
            country: movieObj.country,
            language: movieObj.language,
            year: movieObj.year,
            poster: movieObj.poster,
            summary: movieObj.summary,
            flash: movieObj.flash
        }); 

        debugger;
        console.log();
        _movie.save(function(err, movie){
            if(err){
                console.log(err);
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
