import {connect} from 'react-redux';
import {searchSnapshots} from '../actions/filter'
import Filter from '../components/Filter';

const mapStateToProps = state => ({
    snapshots: state.snapshots.entities,
    activeSnapshotId: state.snapshots.activeSnapshotId
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