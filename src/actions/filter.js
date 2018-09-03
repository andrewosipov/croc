export const SEARCH_SNAPSHOTS = 'SEARCH_SNAPSHOTS';

export const searchSnapshots = (search) => ({
    type: SEARCH_SNAPSHOTS,
    payload: {
        search
    }
});