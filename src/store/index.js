import { createStore } from 'redux';

export default function configureStore() {
    const store = createStore(() => {
        return {
            message: "Hello Electron",
            data: 'some data'
        }
    });

    return store;
}