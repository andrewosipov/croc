import {SEARCH_SNAPSHOTS} from "../actions/filter";

const defaultState = {
  search: ''
};

export default (filterState = defaultState, action) => {
    const {type, payload} = action;

    switch (type) {
        case SEARCH_SNAPSHOTS:
            const newState = {...filterState};
            newState.search = payload.search;
            return newState;

        default:
            return filterState;
    }
}