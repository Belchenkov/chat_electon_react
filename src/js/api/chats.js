import db from '../db/firestore';

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