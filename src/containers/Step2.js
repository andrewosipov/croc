import {connect} from 'react-redux';
import Step2 from '../components/Step2';
import {configureVirtualMachine, createVirtualMachine} from '../actions/virtualMachine';

const mapStateToProps = state => ({
    activeSnapshot: state.snapshots.entities[state.snapshots.activeSnapshotId]
});

const mapDispatchToProps = dispatch => ({
    createVirtualMachine: () => dispatch(createVirtualMachine()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Step2)