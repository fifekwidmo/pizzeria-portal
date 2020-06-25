import React from 'react';
import styles from './Waitress.module.scss';
import {Link} from 'react-router-dom';

// import PropTypes from 'prop-types';

const Waitress = () => (
  <div>
    <h2 className={styles.component}>Waitress view</h2>
    <Link to={`/waitress/order/new`}>New order</Link>
    <Link to={`/waitress/order/:id`}>Order id</Link>
  </div>
);

// MainLayout.propTypes = {
//   children: PropTypes.node,
// };

export default Waitress;
