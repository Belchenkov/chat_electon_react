import firebase from 'firebase/app';
import 'firebase/auth';

import db from '../db/firestore';

const createUserProfile = userProfile => {
    return db
        .collection('profiles')
        .doc(userProfile.uid)
        .set(userProfile);
};

export const getUserProfile = async uid => {
    try {
        return db
                .collection('profiles')
                .doc(uid)
                .get()
                .then(snapshot => snapshot.data());
    } catch (error) {
        return Promise.reject(error.message);
    }
}

export const register = async ({ email, password, username, avatar }) => {
    const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password);
    const { uid } = user;

    await createUserProfile({
        uid,
        username,
        email,
        avatar,
        joinedChats: []
    });

    return user;

};
export const login = async ({email, password }) => {
    return await firebase.auth().signInWithEmailAndPassword(email, password);
};

export const logout = () => firebase.auth().signOut();

export const onAuthStateChanges = onAuth => {
    try {
        firebase
            .auth()
            .onAuthStateChanged(onAuth);
    } catch (error) {
        return Promise.reject(error.message);
    }
}
