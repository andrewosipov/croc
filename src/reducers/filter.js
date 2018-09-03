import {SEARCH_SNAPSHOTS} from "../actions/filter";

export default (searchState = '', action) => {
    const {type, payload} = action;

    switch (type) {
        case SEARCH_SNAPSHOTS:
            return searchState;

        default:
            return searchState;
    }
}