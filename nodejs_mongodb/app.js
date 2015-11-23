var express = require('express');
var path = require('path');
var port = process.env.PORT || 3000;
var app = express();

app.set('views', './views/pages');
app.set('view engine', 'jade');
//app.use(express.bodyParser());
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'bower_components')));
app.listen(port);

console.log('server started on port' + port);

// index page
app.get('/', function(req, res) {
    res.render('index', {
        title: 'index page',
        movies: [{
            title: 'The Runner',
            _id: 1,
        }, {
            title: 'The Runner 2',
            _id: 2
        }]
    });
});

// detail page
app.get('/movie/:id', function(req, res) {
    res.render('detail', {
        title: 'detail page',
        movie: {
            director: 'Roy Atlantis',
            country: 'American',
            title: 'The Runner',
            year: 2014,
            lan: 'ENG',
            Desc: 'AAAAAAABBBBBBBBBCVCCCCCCCCCC'
        }
    });
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
            lan: '',
            desc: ''
        }
    });
});

// list page
app.get('/admin/list', function(req, res) {
    res.render('list', {
        title: 'list page',

        movies: [{
            director: 'Roy Atlantis',
            country: 'American',
            title: 'The Runner',
            year: 2014,
            lan: 'ENG',
            Desc: 'AAAAAAABBBBBBBBBCVCCCCCCCCCC'
        }, {
            director: 'Roy Atlantis',
            country: 'American',
            title: 'The Runner',
            year: 2014,
            lan: 'ENG',
            Desc: 'AAAAAAABBBBBBBBBCVCCCCCCCCCC'
        }]

    });
});
