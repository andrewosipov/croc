import { combineReducers } from 'redux';
import snapshots from './snapshots';
import filter from './filter';
import virtualMachine from './virtualMachine';

export default combineReducers({
    snapshots,
    virtualMachine,
    filter
})