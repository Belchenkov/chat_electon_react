import { Timestamp } from '../js/db/firestore';

export const createTimestamp = () => {
    return Timestamp
        .now()
        .toMillis()
        .toString();
};
