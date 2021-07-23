import React from 'react';

import { withBaseLayout } from "../../layouts/Base";

const ChatCreate = () => {
    return (
        <h1>Chat Create</h1>
    );
};

export default withBaseLayout(ChatCreate, { canGoBack: true });