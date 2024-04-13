import React, { useState } from 'react';

import { createTimestamp } from '../../utils/time';

const Messenger = ({ onSubmit }) => {
    const [value, setValue] = useState('');

    const onKeyPress = e => {
        e.preventDefault();

        if (e.key === 'enter') {
            onSubmit();
            sendMessage(value);
            setValue('');
        }
    };

    const sendMessage = () => {
        if (value.trim() === '') {
            return;
        }

        const message = {
            content: value.trim(),
            timestamp: createTimestamp(),
        };

        onSubmit(message);
    };

    return (
        <div className='chain-input form-group mt-3 mb-0'>
            <textarea
                className='form-control'
                rows='3'
                placeholder="Type your message here..."
                onKeyPress={onKeyPress}
                value={value}
                onChange={e => setValue(e.target.value)}
            />
        </div>
    );
};

export default Messenger;
