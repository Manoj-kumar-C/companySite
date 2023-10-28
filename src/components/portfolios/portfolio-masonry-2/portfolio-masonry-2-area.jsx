import ImagePopup from '@/src/modals/ImagePopup';
import React, { useState } from 'react'; 
import { motion } from "framer-motion"; 
import Image from "next/image"; 
import portfolio_masonry_two_data from '../portfolio-data/portfolio-masonry-2-data';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"


// data
const categories = [
    "All",
    ...new Set(portfolio_masonry_two_data.map((item) => item.category)),
  ];


const PortfolioMasonryTwoArea = () => {    
    const [activeCategory, setActiveCategory] = useState("All");
    const [items, setItems] = useState(portfolio_masonry_two_data);
    // const [catItems, setCatItems]  = useState(categories)
  
    const filterItems = (cateItem) => {
      setActiveCategory(cateItem);
  
      if (cateItem === "All") {
        return setItems(portfolio_masonry_two_data);
      } else {
        const findItems = portfolio_masonry_two_data.filter((findItem) => {
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
  const img = portfolio_masonry_two_data.map((item) => item.img.src);



    return (
        <>
            <div className="portfolio-area pt-100 pb-100">
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
                                        {items.slice(0, 6).map((item, i) => 
                                            <div key={i} className="mb-30">
                                                <div className="xn-portfolio">
                                                    <div className="xn-portfolio-thumb">
                                                        <Image src={item.img} alt="theme-pure" />
                                                    </div>
                                                    <div className="xn-portfolio-content">
                                                        <div className="portfolio-view">
                                                            <a className="popup-image" onClick={() => handleImagePopup(i)} style={{cursor: "pointer"}} ><i className="ti-plus"></i></a>
                                                        </div>
                                                        <h3><a href="#">{item.name}</a></h3>
                                                        <span>{item.title}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        )} 
                                </Masonry>
                            </ResponsiveMasonry> 
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

export default PortfolioMasonryTwoArea;