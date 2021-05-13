import db from '../db/firestore';

export const fetchChats = () => {
    return db
        .collection('chats')
        .get()
        .then(snapshot => snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
};