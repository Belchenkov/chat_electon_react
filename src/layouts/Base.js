import React from 'react';

import Navbar from "../js/components/Navbar";

function BaseLayout({ children, ...props }) {
    return (
        <>
            <Navbar {...props} />
            { children }
        </>
    );
}

export default BaseLayout;