import { fromJS } from "immutable";

const PLURAL = "TASKS";
const INITIAL_STATE = fromJS({
    list_tasks: []
});

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case `SET_${PLURAL}`:
            return state.set("list_tasks", fromJS(action.payload));
        case `SET_${PLURAL}`:
            return state.set("list_tasks", fromJS([]));
        default:
            return state;
    }
};
