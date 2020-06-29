import React from 'react';
import styles from './PageNav.module.scss';
import {NavLink} from 'react-router-dom';
import Button from '@material-ui/core/Button';

// import PropTypes from 'prop-types';

const PageNav = () => (
  <div className={styles.component}>
    <nav>
      <Button className={styles.link} component={NavLink} exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active'>Home</Button>
      <Button className={styles.link} component={NavLink} to={`${process.env.PUBLIC_URL}/login`} activeClassName='active'>Login</Button>
      <Button className={styles.link} component={NavLink} to={`${process.env.PUBLIC_URL}/tables`} activeClassName='active'>Tables</Button>
      <Button className={styles.link} component={NavLink} to={`${process.env.PUBLIC_URL}/kitchen`} activeClassName='active'>Kitchen</Button>
      <Button className={styles.link} component={NavLink} to={`${process.env.PUBLIC_URL}/waitress`} activeClassName='active'>Waitress</Button>
    </nav>
  </div>
);

// MainLayout.propTypes = {
//   children: PropTypes.node,
// };

export default PageNav;
