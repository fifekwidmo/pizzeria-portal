import React from 'react';
import styles from './Tables.module.scss';
import {Link} from 'react-router-dom';
import {Button} from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import DateAndTimePickers from '../../common/DatePicker';

const demoContent = [
  {id: '12:00'},
  {id: '12:30'},
  {id: '13:00'},
  {id: '13:30'},
  {id: '14:00'},
  {id: '14:30'},
];
const renderActions = status => {
  switch (status) {
    case 'free':
      return (
        <>
          <Button>thinking</Button>
          <Button>new order</Button>
        </>
      );
    case 'delivered':
      return (
        <Button>book</Button>
      );
    case 'paid':
      return (
        <Button>free</Button>
      );
    default:
      return null;
  }
};
const Tables = () => {
  return(
    <div className={styles.component}>
      <h1>Tables</h1>
      <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/new`} color="primary" variant="outlined"> New Booking</Button>
      <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/:id`} color="primary" variant="outlined"> Edit Booking</Button>
      <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/event/new`} color="primary" variant="outlined"> New Event</Button>
      <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/events/:id`} color="primary" variant="outlined"> Edit Event</Button>
      <Box component="span" m={1}>
        <DateAndTimePickers />
      </Box>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Time</TableCell>
              <TableCell>Table 1</TableCell>
              <TableCell>Table 2</TableCell>
              <TableCell>Table 3</TableCell>
              <TableCell>Table 4</TableCell>
              <TableCell>Table 5</TableCell>
              <TableCell>Table 6</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {demoContent.map(row => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell>
                  {row.status}
                </TableCell>
                <TableCell>
                  {renderActions(row.status)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};

export default Tables;