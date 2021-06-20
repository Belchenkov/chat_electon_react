import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import JoinedChatsList from "../components/JoinedChatsList";
import AvailableChatsList from "../components/AvailableChatsList";
import ViewTitle from "../components/shared/ViewTitle";

import { fetchChats } from "../../actions/chats";

const Home = () => {
    const dispatch = useDispatch();
    const chats = useSelector(({ chats }) => chats.items);

    useEffect(() => {
        dispatch(fetchChats());
    }, [dispatch])

    return (
        <div className="row no-gutters fh">
            <div className="col-3 fh">
                { JSON.stringify(chats) }
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
