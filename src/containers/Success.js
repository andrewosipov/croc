import {connect} from 'react-redux';
import {successVirtualMachine} from '../actions/virtualMachine';
import Success from '../components/Success';


const mapStateToProps = state => ({
    virtualMachine: state.virtualMachine
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Success)