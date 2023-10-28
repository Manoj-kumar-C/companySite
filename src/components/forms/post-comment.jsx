import React from 'react';

const PostComment = () => {
    const handleSubmit = (e) =>{
        e.preventDefault()

    }
    return (
        <>
            <form id="contacts-form" className="conatct-post-form" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-xl-6">
                        <div className="contact-icon">
                            <label>Your name *</label>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="contact-icon">
                            <label>Your email *</label>
                            <input type="email" required />
                        </div>
                    </div>
                    <div className="col-xl-12">
                        <div className="contact-icon">
                            <label>Your comments *</label>
                            <textarea name="comments" id="comments" cols="30" rows="10" required></textarea>
                        </div>
                    </div>
                    <div className="col-xl-12">
                        <button className="x-btn theme-btn" type="submit">Post comment</button>
                    </div>
                </div>
            </form>
        </>
    );
};

export default PostComment;