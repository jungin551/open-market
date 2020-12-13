import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class Sell extends React.Component {
    render() {
        return (
            <TableRow>
                <TableCell>{this.props.date}</TableCell>
                <TableCell><book src={this.props.book} alt="profile"/></TableCell>
                <TableCell>{this.props.name}</TableCell>
                <TableCell>{this.props.haknum}</TableCell>
                <TableCell>{this.props.email}</TableCell>
                <TableCell>{this.props.won}</TableCell>
            </TableRow>

        )   
    }
}

class SellProfile extends React.Component {
    render() {
        return (
            <div>
                <book src={this.props.book} alt="profile"/>
                <h2>{this.props.name}({this.props.date})</h2>
            </div>
        )
    }
}

class SellInfo extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.haknum}</p>    
                <p>{this.props.email}</p>
                <p>{this.props.won}</p>
            </div>
        )
    }
}


export default Sell;
