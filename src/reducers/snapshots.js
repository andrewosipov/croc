import {SELECT_SNAPSHOT, GET_SNAPSHOTS} from '../actions/snapshots';
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

    }

    return snapshotsState;
}