import React from 'react';
import styles from './PageNav.scss';
import {NavLink} from 'react-router-dom';
// import PropTypes from 'prop-types';

const PageNav = () => (
  <div className={styles.component}>
    <nav>
      <NavLink exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active'>Home</NavLink>
      <NavLink to={`${process.env.PUBLIC_URL}/login`} activeClassName='active'>Login</NavLink>
      <NavLink to={`${process.env.PUBLIC_URL}/tables`} activeClassName='active'>Tables</NavLink>
      <NavLink to={`${process.env.PUBLIC_URL}/kitchen`} activeClassName='active'>Kitchen</NavLink>
      <NavLink to={`${process.env.PUBLIC_URL}/waitress`} activeClassName='active'>Waitress</NavLink>
    </nav>
  </div>
);

// MainLayout.propTypes = {
//   children: PropTypes.node,
// };

export default PageNav;
