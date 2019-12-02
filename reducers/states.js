import { LIST_STATES } from '../actions/statesCities';

export default function(state = [], action) {
    switch (action.type) {
        case LIST_STATES:
            return { ...state, ...action.payload }
        default:
            return state;
    }
}
