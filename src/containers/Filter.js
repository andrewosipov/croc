import {connect} from 'react-redux';
import {searchSnapshots} from '../actions/filter'
import Filter from '../components/Filter';

const mapStateToProps = state => ({
    filter: state.filter
});

const mapDispatchToProps = dispatch => ({
    getSnapshots: () => dispatch(getSnapshots()),
    selectSnapshot: (activeSnapshotId) => dispatch(selectSnapshot(activeSnapshotId)),
    configureVirtualMachine: (activeSnapshot) => dispatch(configureVirtualMachine(activeSnapshot))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Filter)