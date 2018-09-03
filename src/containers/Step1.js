import {connect} from 'react-redux';
import {selectSnapshot, getSnapshots} from '../actions/snapshots';
import {configureVirtualMachine} from '../actions/virtualMachine';
import Step1 from '../components/Step1';


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
    mapDispatchToProps,
    null,
    { pure: false }
)(Step1)