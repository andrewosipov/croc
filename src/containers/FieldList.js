import {connect} from 'react-redux';
import {configureVirtualMachine} from '../actions/virtualMachine';
import FieldList from '../components/FieldList';


const mapStateToProps = state => ({
    activeSnapshot: state.snapshots.entities[state.snapshots.activeSnapshotId],
    virtualMachine: state.virtualMachine
});

const mapDispatchToProps = dispatch => ({
    configureVirtualMachine: (virtualMachine) => dispatch(configureVirtualMachine(virtualMachine)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FieldList)