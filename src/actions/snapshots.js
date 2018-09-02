export const SELECT_SNAPSHOT = 'SELECT_SNAPSHOT';
export const GET_SNAPSHOTS = 'GET_SNAPSHOTS';
export const GET_ACTIVE_SNAPSHOT = 'GET_ACTIVE_SNAPSHOT';

export const selectSnapshot = (activeSnapshot) => ({
    type: SELECT_SNAPSHOT,
    payload: {
        activeSnapshot
    }
});

export const getSnapshots = () => ({
    type: GET_SNAPSHOTS
});

export const getActiveSnapshot = () => ({
    type: GET_ACTIVE_SNAPSHOT
});