import ImagePopup from '@/src/modals/ImagePopup';
import React, { useState } from 'react'; 
import Link from 'next/link';
import { motion } from "framer-motion"; 
import Image from "next/image";
import portfolio_grid_data from '../portfolio-data/portfolio-grid-data';


// data
const categories = [
    "All",
    ...new Set(portfolio_grid_data.map((item) => item.category)),
  ];


const PortfolioGridFullArea = () => {

    const [activeCategory, setActiveCategory] = useState("All");
    const [items, setItems] = useState(portfolio_grid_data);
    // const [catItems, setCatItems]  = useState(categories)
  
    const filterItems = (cateItem) => {
      setActiveCategory(cateItem);
  
      if (cateItem === "All") {
        return setItems(portfolio_grid_data);
      } else {
        const findItems = portfolio_grid_data.filter((findItem) => {
          return findItem.category == cateItem;
        });
        setItems(findItems);
      }
    };


 // photoIndex
  const [photoIndex, setPhotoIndex] = useState(0);

  // image open state
  const [isOpen, setIsOpen] = useState(false);

  // handleImagePopup
  const handleImagePopup = (i) => {
    setPhotoIndex(i);
    setIsOpen(true);
  };
  
  //  images
  const img = portfolio_grid_data.map((item) => item.img.src);



    return (
        <>
             <div className="portfolio-area pt-150 pb-120">
                <div className="container-fluid">
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
                        <motion.div layout={true} className="row grid text-center">
                            {items.slice(0, 8).map((item, i) => 
                                <div key={i} className="col-xl-3 col-lg-4 col-md-6 grid-item cat1 cat2 mb-30">
                                    <div className="xn-portfolio"> 
                                        <div  className="xn-portfolio-thumb grad-overlay">
                                            <Image src={item.img}  alt="theme-pure" />
                                            <div className="port-view">
                                                <a className="popup-image" onClick={() => handleImagePopup(i)} style={{cursor: "pointer"}}>
                                                    <i className="far fa-search"></i>
                                                </a>
                                                <Link className="port-link" href="/portfolio-single-1">
                                                    <i className="far fa-link"></i>
                                                </Link>
                                                <div></div>
                                                <h3>{item.name}</h3>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>  
                            )} 
                        </motion.div>  
                </div>
            </div>

            {/* image light box start */}
            {isOpen && (
                <ImagePopup
                images={img}
                setIsOpen={setIsOpen}
                photoIndex={photoIndex}
                setPhotoIndex={setPhotoIndex}
                />
            )}
            {/* image light box end */}

        </>
    );
};

export default PortfolioGridFullArea;