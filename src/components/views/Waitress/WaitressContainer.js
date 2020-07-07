import {connect} from 'react-redux';
import Waitress from './Waitress';
import {getAll, fetchFromAPI, getLoadingState, newTableStatus} from '../../../redux/tablesRedux.js';
const mapStateToProps = (state) => ({
  tables: getAll(state),
  loading: getLoadingState(state),
});
const mapDispatchToProps = (dispatch) => ({
  fetchTables: () => dispatch(fetchFromAPI()),
  statusChange: (table, newStatus) => 
    dispatch(newTableStatus(table, newStatus)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Waitress);