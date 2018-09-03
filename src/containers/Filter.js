import {connect} from 'react-redux';
import {searchSnapshots} from '../actions/filter'
import Filter from '../components/Filter';

const mapStateToProps = state => ({
    filter: state.filter
});

const mapDispatchToProps = dispatch => ({
    searchSnapshots: (search) => dispatch(searchSnapshots(search))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Filter)