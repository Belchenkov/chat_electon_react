import React, { useState } from 'react';

const Messenger = ({ onSubmit }) => {
    const [value, setValue] = useState('');

    const onKeyPress = e => {
        e.preventDefault();

        if (e.key === 'enter') {
            onSubmit();
            alert(value);
            setValue('');
        }
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
