import firebase from 'firebase/app';
import 'firebase/auth';

import db from '../db/firestore';

const createUserProfile = userProfile => {
    return db
        .collection('profiles')
        .doc(userProfile.uid)
        .set(userProfile);
};

export const register = async ({email, password, username, avatar}) => {
    try {
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
    } catch (error) {
        return Promise.reject(error.message);
    }
};