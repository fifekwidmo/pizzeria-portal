import React from 'react';
import PropTypes from 'prop-types';
import styles from './Waitress.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
class Waitress extends React.Component {
  static propTypes = {
    fetchTables: PropTypes.func,
    loading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.oneOf([PropTypes.bool,PropTypes.string]),
      //changed anyOf na oneOf i add [] w error
    }),
    tables: PropTypes.any,
    statusChange: PropTypes.func,
  }
  componentDidMount(){
    const {fetchTables} = this.props;
    fetchTables();
  }
  renderActions(table, status){
    switch (status) {
      case 'free':
        return (
          <>
            <Button onClick={() => this.props.statusChange(table, 'thinking')}>thinking</Button>
            <Button component={Link} to={`${process.env.PUBLIC_URL}/waitress/order/new`}>New Order</Button>
          </>
        );
      case 'thinking':
        return (
          <Button component={Link} to={`${process.env.PUBLIC_URL}/waitress/order/new`}>New Order</Button>
        );
      case 'ordered':
        return (
          <Button onClick={() => this.props.statusChange(table, 'prepared')} >prepared</Button>
        );
      case 'prepared':
        return (
          <Button onClick={() => this.props.statusChange(table, 'delivered')}>delivered</Button>
        );
      case 'delivered':
        return (
          <Button onClick={() => this.props.statusChange(table, 'paid')}>paid</Button>
        );
      case 'paid':
        return (
          <Button onClick={() => this.props.statusChange(table, 'free')}>free</Button>
        );
      default:
        return null;
    }
  }
  render() {
    const {loading: {active, error}, tables} = this.props;
    if(active || !tables.length){
      return (
        <Paper className={styles.component}>
          <p>Loading...</p>
        </Paper>
      );
    } else if(error) {
      return (
        <Paper className={styles.component}>
          <p>Error! Details:</p>
          <pre>{error}</pre>
        </Paper>
      );
    } else {
      return (
        <Paper className={styles.component}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Table</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Order</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tables.map(row => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell>
                    {row.status}
                  </TableCell>
                  <TableCell>
                    {row.order && (
                      <Button to={`${process.env.PUBLIC_URL}/waitress/order/:id${row.order}`}>
                        {row.order}
                      </Button>
                    )}
                  </TableCell>
                  <TableCell>
                    {this.renderActions(row.table, row.status)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      );
    }
  }
}
export default Waitress;