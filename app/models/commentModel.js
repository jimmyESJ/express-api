var mongoose     = require('mongoose'); //mongoDBに接続するためのライブラリ
var Schema       = mongoose.Schema; //mongoDBのスキーマを作る
var moment       = require('moment');

var CommentSchema   = new Schema({
    country :String,
    user: String,
    comment: String,
    date: String
});

CommentSchema.methods.setDate = function () { 
    //作った時間をセット
    this.date = moment().format("YYYY-MM-DD HH:mm:ss"); 
};

// スキーマをモデルとしてコンパイルし、それをモジュールとして扱えるようにする
module.exports = mongoose.model('CommentModel', CommentSchema);