import Link from 'next/link';
import Image from "next/image"; 
import { motion } from "framer-motion"; 
import React, { useState } from 'react';  
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import portfolio_masonry_data from '../portfolio-data/portfolio-masonry-data';
import portfolio_data from '@/src/data/portfolio-data';


// data
const categories = [
    "All",
    ...new Set(portfolio_masonry_data.map((item) => item.category)),
  ];

const PortfolioMasonryArea = ({style_gallery}) => {

    const [activeCategory, setActiveCategory] = useState("All");
    const [items, setItems] = useState(portfolio_masonry_data);
    // const [catItems, setCatItems]  = useState(categories)
  
    const filterItems = (cateItem) => {
      setActiveCategory(cateItem);
  
      if (cateItem === "All") {
        return setItems(portfolio_masonry_data);
      } else {
        const findItems = portfolio_masonry_data.filter((findItem) => {
          return findItem.category == cateItem;
        });
        setItems(findItems);
      }
    };

    // portfolio data filtering 
    const portfolio_data_filter = style_gallery ? portfolio_data.slice(0,3) : items.slice(0, 6)


    return (
        <>
            <div className={`portfolio-area ${style_gallery ? "pt-20" : "pt-150 pb-110"}`}>
                <div className="container">
                    <div className="row text-center">
                        <div className="col-12">
                            <div className="portfolio-menu mb-50">
                            {categories.map((cate, i) => (
                                    <button
                                    onClick={() => filterItems(cate)}
                                    key={i}
                                    className={`${cate === activeCategory ? "active" : ""}`}>
                                    {cate}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div> 
                        <motion.div layout className='row' >
                            <ResponsiveMasonry columnsCountBreakPoints={{ 0: 1, 768: 2, 992: 2, 1200: 3, 1400:3 }} >
                                        <Masonry gutter="25px" >
                                        {portfolio_data_filter.map((item, i) => 
                                            <div key={i} className="mb-40">
                                                <div className="xn-portfolio">
                                                    <div className="xn-portfolio-thumb grad-overlay mb-25">
                                                        <Link className="port-img-link" href="/portfolio-single-1">
                                                            <Image src={item.img} alt="theme-pure" />
                                                            <div className="port-view port-view-text">
                                                                <h4 className="port-text-link">Discover more</h4>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                    <div className="xn-port-content-static">
                                                        <h3><a href="#">{item.name}</a></h3>
                                                        <span>Design</span>
                                                    </div>
                                                </div>
                                            </div> 
                                        )} 
                                </Masonry>
                            </ResponsiveMasonry> 
                        </motion.div>  
                </div>
            </div> 

        </>
    );
};

export default PortfolioMasonryArea;