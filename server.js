var express = require('express')
var path = require('path')
var cors = require('cors')
var mongoose = require('mongoose')
var router = express.Router()
const serveStatic = require('serve-static')


var Puzzle = mongoose.model('Puzzle', {
    question: String,
    img: String,
    options: Array,
    solution: Object,
    answer: Object,
    isCorrect: Object,
    explanation: String
})

var Review = mongoose.model('Review', {
    name: String,
    opinion: String
})

const app  = express()
app.use(cors())
app.use(express.static(__dirname))
// app.use(serveStatic(__dirname + '../dist'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))



const connection = mongoose.connection

connection.once('open', () => {
    console.log('connection is OK');
})

router.route('/puzzles').get((req, res) => {
    Puzzle.find((err, puzzles) => {
        if (err)
        console.log(err);
        else
        res.json(puzzles)
    })
})

router.route('/reviews').get((req, res) => {
    Review.find((err, reviews) => {
        if (err) console.log(err)
        res.json(reviews)
    })
})


app.use('/', router)


// Serve only the static files form the dist directory
app.use(express.static('./dist/my-web'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/my-web/'}),
);

// Start the app by listening on the default Heroku port
const port = process.env.PORT || 4000

app.listen(port, () => console.log(`Running on ${port}`))

var dbUrl = 'mongodb+srv://erez:chompy24@cluster0.pzmfj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(dbUrl, { useNewUrlParser: true,  useUnifiedTopology: true }, (err) => {
    console.log('mongo db connected' ,err);
})