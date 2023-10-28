import portfolio_data from '@/src/data/portfolio-data'; 
import ImagePopup from '@/src/modals/ImagePopup';
import Image  from 'next/image';
import React,  { useState } from 'react'; 
import { motion } from "framer-motion"; 




// data
const categories = [
    "All",
    ...new Set(portfolio_data.map((item) => item.category)),
  ];
const PortfolioArea = ({style_gallery}) => {

    const [activeCategory, setActiveCategory] = useState("All");
    const [items, setItems] = useState(portfolio_data);
    // const [catItems, setCatItems]  = useState(categories)
  
    const filterItems = (cateItem) => {
      setActiveCategory(cateItem);
  
      if (cateItem === "All") {
        return setItems(portfolio_data);
      } else {
        const findItems = portfolio_data.filter((findItem) => {
          return findItem.category == cateItem;
        });
        setItems(findItems);
      }
    };
    
  // filter for gallery 
  const filter_items = style_gallery ? items.slice(0, 3) : items.slice(0, 9)



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
  const img = portfolio_data.map((item) => item.img.src);

    return (
        <>
             <div className={`portfolio-area ${style_gallery ? "pt-100" : "pt-100 pb-100"}`}>
                <div className="container">
                    <div className="row text-center">
                        <div className="col-12">
                            <div className="portfolio-menu mb-50">
                                {categories.map((cate, i) => (
                                    <button
                                    onClick={() => filterItems(cate)}
                                    key={i}
                                    className={`${cate === activeCategory ? "active" : ""}`}
                                    >
                                    {cate}
                                    </button>
                                ))} 
                            </div>
                        </div>
                    </div>
                    <motion.div layout={true} className="row grid text-center">
                        {filter_items.map((item, i) => 
                            <div key={i} className="col-xl-4 col-lg-4 col-md-6 grid-item cat4 cat2 mb-30">
                                <div className="xn-portfolio"> 
                                    <div  className="xn-portfolio-thumb">
                                        <Image src={item.img}  alt="theme-pure" />
                                    </div>
                                    <div className="xn-portfolio-content">
                                        <div className="portfolio-view">
                                            <a className="popup-image" style={{cursor: "pointer"}}>
                                              <i onClick={() => handleImagePopup(i)} className="ti-plus"></i>
                                            </a>
                                        </div>
                                        <h3><a style={{cursor: "pointer", color: "#fff"}}>{item.name}</a></h3>
                                        <span>{item.title}</span>
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

export default PortfolioArea;