import { createStore } from 'redux';

const INITIAL_STATE = {
    data: []
};

function dataBudget(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD_BUDGETS':
            return { ...state, data: action.data };    
        default:
            return state
    }
}

const store = createStore(dataBudget, window.__REDUX_DEVTOOLS_EXTENSION__ && 
    window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;