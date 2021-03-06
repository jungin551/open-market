import React, { Component } from 'react';
import Sell from './point/Sell';
import SallAdd from './point/SallAdd';
import './App.css';
import Paper from '@material-ui/core/Paper';
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


class App extends Component {

  state = {
    sells: ""
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({sells: res}))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/sells');
    const body = await response.json();
    return body;
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Paper className={classes.root}>
          <Table className={classes.table}>
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
            {this.state.sells ? this.state.sells.map(c => {
              return <Sell key={c.date} date={c.date} book={c.book} name={c.name} haknum={c.haknum} email={c.email} won={c.won} />
         }) : ""}
            </TableBody>
          </Table>
        </Paper>  
        <SallAdd/>   
      </div>
    );
  }
}

export default withStyles(styles)(App);
