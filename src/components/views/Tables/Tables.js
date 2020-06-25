import React from 'react';
import styles from './Tables.module.scss';
import {Link} from 'react-router-dom';
// import PropTypes from 'prop-types';

const Tables = () => (
  <div>
    <h2 className={styles.component}>Tables view</h2>
    <Link to={`/tables/booking/new`}>New booking</Link>
    <Link to={`/tables/booking/book/:id`}>Booking id</Link>
    <Link to={`/tables/event/new`}>New event</Link>
    <Link to={`/tables/events/event/:id`}>Event id</Link>
  </div>
);

export default Tables;
