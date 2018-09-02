export const SELECT_SNAPSHOT = 'SELECT_SNAPSHOT';
export const GET_SNAPSHOTS = 'GET_SNAPSHOTS';

export const selectSnapshot = (activeSnapshotId) => ({
    type: SELECT_SNAPSHOT,
    payload: {
        activeSnapshotId
    }
});

export const getSnapshots = () => ({
    type: GET_SNAPSHOTS
});
