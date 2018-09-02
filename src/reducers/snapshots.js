import {SELECT_SNAPSHOT, GET_SNAPSHOTS, GET_ACTIVE_SNAPSHOT} from '../actions/snapshots';
import snapshotsFixctures from '../fixctures';

const defaultSnapshotsState = {
    entities: snapshotsFixctures,
    activeSnapshot: 0
};

export default (snapshotsState = defaultSnapshotsState, action) => {
    const {type, payload} = action;

    switch (type) {
        case GET_SNAPSHOTS:
            return snapshotsState;

        case SELECT_SNAPSHOT:
            snapshotsState.activeSnapshot = payload.activeSnapshot;
            return snapshotsState;

        case GET_ACTIVE_SNAPSHOT:
            return snapshotsState;
    }

    return snapshotsState;
}