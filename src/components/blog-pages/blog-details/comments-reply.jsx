import React from 'react';

import first_user from "@assets/img/blog/details/comments1.png";
import second_user from "@assets/img/blog/details/comments2.png"; 
import Image from 'next/image';
import Link from 'next/link';

const comments_reply_data = [
    {
        id: 1,
        user: first_user,
        cls: "",
        name: "Karon Balina",
        time: "19th May 2023",
        comment: <>ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</>,
    },
    {
        id: 2,
        user: second_user,
        cls: "children",
        name: "Julias Roy",
        time: "19th May 2023",
        comment: <>ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</>,
    },
    {
        id: 3,
        user: first_user,
        cls: "",
        name: "Arista Williamson",
        time: "19th May 2023",
        comment: <>ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</>,
    },
]

const CommentsReply = () => {
    return (
        <>
            <ul>
                {comments_reply_data.map((item, i) => 
                    <li key={i} className={item.cls}>
                        <div className="comments-box">
                            <div className="comments-avatar">
                                <Image src={item.user} alt="theme-pure" />
                            </div>
                            <div className="comments-text">
                                <div className="avatar-name">
                                    <h5>{item.name}</h5>
                                    <span>{item.time}</span>
                                    <Link className="reply" href="#">
                                        <i className="fas fa-reply"></i>
                                        Reply
                                    </Link>
                                </div>
                                <p>{item.comment}</p>
                            </div>
                        </div>
                    </li>                
                )} 
            </ul>
        </>
    );
};

export default CommentsReply;