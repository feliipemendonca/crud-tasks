import config from "../config";

const PLURAL = "TASKS";

export const unset = () => {
    return {
        type: `UNSET_${PLURAL}_INFO`
    };
};

export const listTasks = () => {
    return dispatch => {
        dispatch(unset());
        config.list("index", `SET_${PLURAL}`, dispatch);
    };
};