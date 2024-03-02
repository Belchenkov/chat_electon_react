import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { withBaseLayout } from '../../layouts/Base';
import JoinedChatsList from "../components/JoinedChatsList";
import AvailableChatsList from "../components/AvailableChatsList";
import ViewTitle from "../components/shared/ViewTitle";
import Notification from '../../utils/notifications';

import { fetchChats } from "../../actions/chats";

const Home = () => {
    const dispatch = useDispatch();
    const joinedChats = useSelector(({ chats }) => chats.joined);
    const availableChats = useSelector(({ chats }) => chats.available);

    useEffect(() => {
        Notification.setup();

        dispatch(fetchChats());
    }, [dispatch])

    return (
        <div className="row no-gutters fh">
            <div className="col-3 fh">
                <JoinedChatsList chats={joinedChats} />
            </div>
            <div className="col-9 fh">
                <ViewTitle text="Choose your channel">
                    <Link className="btn btn-outline-success" to="/chat-create">
                        <i className="fa fa-plus-circle mr-2" />
                        New
                    </Link>
                </ViewTitle>
                <AvailableChatsList chats={availableChats} />
            </div>
        </div>
    );
};

export default withBaseLayout(Home);
