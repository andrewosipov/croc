import {SELECT_SNAPSHOT, GET_SNAPSHOTS} from '../actions/snapshots';

export default (snapshots, action) => {
    const {type} = action;

    switch (type) {
        case GET_SNAPSHOTS: return snapshots;
    }

    return snapshots;
}