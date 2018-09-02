import { combineReducers } from 'redux';
import snapshots from './snapshots';
import virtualMachine from './virtualMachine';

export default combineReducers({
    snapshots,
    virtualMachine
})