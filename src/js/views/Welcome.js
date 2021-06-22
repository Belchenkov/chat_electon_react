import React from 'react';

import LoginForm from "../components/LoginForm";

export default function Welcome() {
    return (
        <div className="centered-view">
            <div className="centered-container">
               <LoginForm />
                <small className="form-text text-muted mt-2">Not registered yet?
                    <span
                        onClick={() => {}}
                        className="btn-link ml-2">Register</span>
                </small>
            </div>
        </div>
    )
}
