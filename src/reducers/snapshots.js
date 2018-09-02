import {SELECT_SNAPSHOT, GET_SNAPSHOTS} from '../actions/snapshots';
import snapshotsFixctures from '../fixctures';

const defaultSnapshotsState = {
    entities: snapshotsFixctures,
    activeSnapshotId: 0
};

export default (snapshotsState = defaultSnapshotsState, action) => {
    const {type, payload} = action;

    switch (type) {
        case GET_SNAPSHOTS:
            return snapshotsState;

        case SELECT_SNAPSHOT:
            snapshotsState.activeSnapshotId = payload.activeSnapshotId;
            return snapshotsState;

    }

    return snapshotsState;
}