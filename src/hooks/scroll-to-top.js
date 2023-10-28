import React, { useState, useEffect } from "react";
import useSticky from "./use-sticky";

const ScrollToTop = () => {
  const { sticky } = useSticky();

  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, []);

  return (
    <> 
    <div className={`back-to-top-wrapper ${sticky ? "back-to-top-btn-show" : ""}`}>
      <button
        onClick={scrollTop}
        className="back-to-top-btn" 
        data-target="html"
        style={{position:  "fixed", zIndex: "2147483647", display: "block"}}
        id="scrollUp" type="button" >  
                <i className="fas fa-long-arrow-alt-up"></i> 
      </button> 
      </div>
    </>
  );
};

export default ScrollToTop;
