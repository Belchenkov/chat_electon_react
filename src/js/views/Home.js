import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";

import JoinedChatsList from "../components/JoinedChatsList";
import AvailableChatsList from "../components/AvailableChatsList";
import ViewTitle from "../components/shared/ViewTitle";

import { fetchChats } from "../../actions/chats";

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchChats());
    }, [dispatch])

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
