import {connect} from 'react-redux';
import FieldList from '../components/FieldList';


const mapStateToProps = state => ({
    activeSnapshot: state.snapshots.entities[state.snapshots.activeSnapshotId]
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FieldList)