import {connect} from 'react-redux';
import Step2 from '../components/Step2';


const mapStateToProps = state => ({
    activeSnapshot: state.snapshots.entities[state.snapshots.activeSnapshotId]
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Step2)