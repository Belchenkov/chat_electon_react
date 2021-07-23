import React from 'react';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import { withBaseLayout } from "../../layouts/Base";

const ChatCreate = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
      alert(JSON.stringify(data));
    };

    return (
        <div className="centered-view">
            <div className="centered-container">
                <form onSubmit={handleSubmit(onSubmit)} className="centered-container-form">
                    <div className="header">Create Chat Now!</div>
                    <div className="subheader">Chat with people</div>
                    <div className="form-container">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                {...register('name', { required: true })}
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea
                                {...register('description', { required: true })}
                                name="description"
                                className="form-control"
                                id="description"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="image">Image</label>
                            <input
                                {...register('image', { required: true })}
                                type="text"
                                className="form-control"
                                id="image"
                                name="image"
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn btn-outline-primary"
                        >
                            <i className="fa fa-plus-circle mr-2" />
                            Create
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default withBaseLayout(ChatCreate, { canGoBack: true });