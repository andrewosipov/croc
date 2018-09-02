import {SELECT_SNAPSHOT, GET_SNAPSHOTS} from '../actions/snapshots';
import defaultSnapshotsState from '../fixctures';

export default (snapshots = defaultSnapshotsState, action) => {
    const {type} = action;

    switch (type) {
        case GET_SNAPSHOTS: return snapshots;
    }

    return snapshots;
}