import db from '../db/firestore';
import firebase from 'firebase/app';

export const fetchChats = () => {
    return db
        .collection('chats')
        .get()
        .then(snapshot => snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
};

export const createChat = chat => {
    return db
        .collection('chats')
        .add(chat)
        .then(docRef => docRef.id)
};

export const joinChat = async (userId, chatId) => {
    const useRef = db.doc(`profiles/${userId}`);
    const chatRef = db.doc(`chats/${chatId}`);

    await useRef.update({ joinedChats: firebase.firestore.FieldValue.arrayUnion(chatRef) });
    await useRef.update({ joinedUsers: firebase.firestore.FieldValue.arrayUnion(useRef) });
};