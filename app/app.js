var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
const cors = require('cors');

app.use(cors());

mongoose.Promise = global.Promise;
const connectOption = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};
mongoose.connect('mongodb+srv://wang:99813721@cluster0-9yyqv.mongodb.net/test?retryWrites=true&w=majority', connectOption);
mongoose.connection.on('error', function(err) {
    console.error('MongoDB connection error: ' + err);
    process.exit(-1);
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;

var router = require('./routes/v1/');
app.use('/api/v1/', router);

//サーバ起動
app.listen(port);
console.log('listen on port ' + port);