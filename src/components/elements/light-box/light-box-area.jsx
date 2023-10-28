import React, { useState } from 'react';
import portfolio_three_data from '../../portfolios/portfolio-data/portfolio-3-data';
import Image from 'next/image';
import ImagePopup from '@/src/modals/ImagePopup';

const LightBoxArea = () => {

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
  const img = portfolio_three_data.map((item) => item.img.src);


    return (
        <>
           <div className="portfolio-area pt-120 pb-90">
                <div className="container">
                    <div className="row grid text-center">
                        {portfolio_three_data.slice(0, 6).map((item, i) =>  
                                <div key={i} className="col-xl-4 col-lg-4 col-md-6 grid-item cat1 cat2 mb-30">
                                    <div className="xn-portfolio">
                                        <div className="xn-portfolio-thumb grad-overlay">
                                            <Image src={item?.img} alt="theme-pure" />
                                            <div className="port-view">
                                                <a className="popup-image" onClick={() => handleImagePopup(i)} style={{cursor: "pointer"}}>
                                                    <i className="far fa-search"></i>
                                                </a>
                                                <div></div>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                        )} 
                    </div>
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

export default LightBoxArea;