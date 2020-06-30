var express   = require('express');
var router    = express.Router();
var CommentModel = require('../../models/commentModel.js');

router.post('/',function(req,res){

    // モデル作成．
    var Comment = new CommentModel();

    // データを詰め込むu
    Comment.country = req.body.country;
    Comment.user = req.body.user;
    Comment.comment = req.body.comment;
    Comment.setDate();

    // 保存処理
    Comment.save(function(err) {
        if (err){
            // エラーがあった場合エラーメッセージを返す
            res.send(err);
        } else {
            // エラーがなければ「Success!!」
            res.json({ message: 'Success!!' });
        }
    });
});

router.get('/:id', function (req, res) {
    const country = req.params.id;
    CommentModel
        .find({"country": country})
        .then(function (comments) {
            res.json(comments);
        });
});

router.get('/', function (req, res) {
    CommentModel
        .find()
        .then(function (comments) {
            res.json(comments);
        });
});


//routerをモジュールとして扱う準備
module.exports = router;