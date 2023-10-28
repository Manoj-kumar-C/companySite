import Link from 'next/link';
import React from 'react';


const categories_data = [
    {id: 1, title: "App design", items: 78},
    {id: 2, title: "Creative", items: 42},
    {id: 3, title: "Technology", items: 32},
    {id: 4, title: "Branding", items: 85},
    {id: 5, title: "Web Design", items: 5},
]
const CategoriesArea = () => {
    return (
        <>
            <div className="widget mb-50">
                <div className="widget-title-box mb-40">
                    <span className="animate-border"></span>
                    <h3 className="widget-title">Categories</h3>
                </div>
                <ul className="cat">
                    {categories_data.map((item, i) => 
                        <li key={i}>
                            <Link href="#">{item.title}<span className="f-right">{item.items}</span></Link>
                        </li>
                    
                    )}
                </ul>
            </div>
        </>
    );
};

export default CategoriesArea;