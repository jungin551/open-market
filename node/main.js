/*var stdInfo = require('./User');

module.exports = function(app)
{

        app.get('/',function(__req,res){
            res.render('sever.html')
        });

        app.post('/info', function (req, res){

            console.log('데이터 입력됨.');
            
            stdInfo.create({
                date: req.body.date,
                book: req.body.book,
                name: req.body.name,
                haknum: req.body.haknum,
                email: req.body.email,
                won: req.body.won
            });
            var date = req.body.date;
            var book = req.body.book;

            res.send(date + " " + Name);

            console.log(date + " " + Name);
        });
}*/