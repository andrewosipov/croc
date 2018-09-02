import { createStore as createReduxStore } from 'redux';
import rootReducer from './reducers';

export const createStore = () => {
    return createReduxStore(
        rootReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
};

const store = createStore();

export default store