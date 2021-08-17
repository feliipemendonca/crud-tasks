import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";

import promise from "redux-promise";
import multi from "redux-multi";
import thunk from "redux-thunk";

import Reducers from "./api/RootReducers";
import Routes from "./api/Routes";
import App from "./app";

const devTools =
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();
const store = applyMiddleware(thunk, multi, promise)(createStore)(
    Reducers,
    devTools
);

ReactDOM.render(
        <Provider store={store}>
            <Routes />
        </Provider>,
    document.getElementById("example")
);