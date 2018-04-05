import Immutable from "immutable";

import {
    WRITE_UPDATE_ACTIVE_NAV
} from "src/actions/main.js";

const initialState = Immutable.fromJS({
    activeNav: "",
    activePage: ""
});

function mainReducer(state = initialState, action) {
    switch (action.type) {
        case WRITE_UPDATE_ACTIVE_NAV:
            return state.withMutations((newState) => {
                newState.set("activeNav", action.activeNav);
            });
        default:
            return state;
    }
}

export default mainReducer;