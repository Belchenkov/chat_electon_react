import React, { useEffect } from 'react';

import JoinedChatsList from "../components/JoinedChatsList";
import AvailableChatsList from "../components/AvailableChatsList";
import ViewTitle from "../components/shared/ViewTitle";

import { fetchChats } from "../api/chats";

const Home = () => {
    useEffect(() => {
        fetchChats().then(data => console.log(data));
    }, [])

    return (
        <div className="row no-gutters fh">
            <div className="col-3 fh">
                <JoinedChatsList />
            </div>
            <div className="col-9 fh">
                <ViewTitle text="Choose your channel" />
                <AvailableChatsList />
            </div>
        </div>

    );
};

export default Home;
