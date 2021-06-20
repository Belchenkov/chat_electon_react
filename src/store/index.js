import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

export default function configureStore() {
    const middlewares = [
        thunkMiddleware
    ];
    const store = createStore(() => {
        return {
            message: "Hello Electron",
            data: 'some data'
        }
    }, applyMiddleware(...middlewares));

    return store;
}