import {connect} from 'react-redux';
import {selectSnapshot, getSnapshots} from '../actions/snapshots';
import Step1 from '../components/Step1';


const mapStateToProps = state => ({
    snapshots: state.snapshots.entities,
    activeSnapshot: state.snapshots.activeSnapshot
});

const mapDispatchToProps = dispatch => ({
    getSnapshots: () => dispatch(getSnapshots()),
    selectSnapshot: (activeSnapshot) => dispatch(selectSnapshot(activeSnapshot))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    null,
    { pure: false }
)(Step1)