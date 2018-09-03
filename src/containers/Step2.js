import {connect} from 'react-redux';
import Step2 from '../components/Step2';
import {successVirtualMachine, createVirtualMachine} from '../actions/virtualMachine';

const mapStateToProps = state => ({
    activeSnapshot: state.snapshots.entities[state.snapshots.activeSnapshotId],
    virtualMachine: state.virtualMachine
});

const mapDispatchToProps = dispatch => ({
    createVirtualMachine: () => dispatch(createVirtualMachine()),
    successVirtualMachine: () => dispatch(successVirtualMachine())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Step2)