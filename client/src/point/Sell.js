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


export default Sell;
