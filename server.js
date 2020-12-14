const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

//var db = require('./db');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/sells', (req, res) => {
  res.send([
    {
    'date': '11/23',
    'book': '책사진',
    'name': '임베디드',
    'haknum': '12345 홍길동',
    'email': 'adc@naver.com',
    'won': '40000원'
  },
  {
    'date': '11/29',
    'book': '책사진',
    'name': 'c언어',
    'haknum': '24568 김현철',
    'email': 'dsd@naver.com',
    'won': '30000원'
  },
  {
    'date': '12/10',
    'book': '책사진',
    'name': '이산수학',
    'haknum': '201526 송은지',
    'email': 'cds@naver.com',
    'won': '20000원'
  }
]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));

