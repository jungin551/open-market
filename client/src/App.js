import React, { Component } from 'react';
import Sell from './point/Sell'
import './App.css';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
root: {
width: "100%",
marginTop: theme.spacing.unit * 3,
overflowX: "auto"
},
table: {
minWidth: 1080
}
});


const sells = [
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
]

class App extends Component {
  render() {
    return (
      <div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>업로드일</TableCell>
              <TableCell>책이미지</TableCell>
              <TableCell>책 제목</TableCell>
              <TableCell>학번/이름</TableCell>
              <TableCell>이메일</TableCell>
              <TableCell>가격</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {sells.map(c => {
            return <Sell key={c.date} date={c.date} book={c.book} name={c.name} haknum={c.haknum} email={c.email} won={c.won} />
        })}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default withStyles(styles)(App);
