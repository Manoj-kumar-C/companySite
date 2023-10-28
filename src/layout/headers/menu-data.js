const menu_data = [
  {
    id: 1,
    mega_menu: false,
    has_dropdown: true,
    has_children: false,
    title: "Home",
    link: "/",
    sub_menus: [
      { link: "/",       title: "Home Version 01" },
      { link: "/home-2", title: "Home Version 02" },
      { link: "/home-3", title: "Home Version 03" },
      { link: "/home-4", title: "Home Version 04" },
      { link: "/home-5", title: "Home Version 05" },
      { link: "/home-6", title: "Home Version 06" },
      { link: "/home-7", title: "Home Version 07" }, 
    ],
  },
  {
    id: 2,
    mega_menu: false,
    has_dropdown: true,
    has_children: true,
    title: "Pages",
    link: "/about",
    sub_menus: [
      { 
        link: "/about",  
        title: "About",
        children_menus: [
          {link: "/about", title: "About Us 01"},
          {link: "/about-2", title: "About Us 02"},
        ]
      },
      { 
        link: "/service", 
        title: "Service",
        children_menus: [
          {link: "/service", title: "Service 1"},
          {link: "/service-2", title: "Service 2"},
          {link: "/service-details", title: "Service Details"},
        ]

      },
      { link: "/price", title: "Pricing" },
      { link: "/faq", title: "Faq" },
      { 
        link: "/contact", 
        title: "Contact Us",
        children_menus: [
          {link: "/contact", title: "Contact"},
          {link: "/contact-standard", title: "contact standard"},
          {link: "/contact-minimal", title: "contact minimal"},
        ]
      },
      { link: "/process", title: "Process" },
      { 
        link: "/team", 
        title: "Team",
        children_menus: [
          {link: "/team", title: "team 01"},
          {link: "/team-2", title: "team 02"}, 
        ]

      },
      { link: "/login", title: "Login" },
      { link: "/register", title: "Register" },
      { link: "/coming-soon", title: "Coming Soon" }, 
      { link: "/404", title: "404 Error" }, 
    ],
  },
  {
    id: 3,
    mega_menu: false,
    has_dropdown: true,
    has_children: false,
    title: "Portfolio",
    link: "/portfolio",
    sub_menus: [
      { link: "/portfolio", title: "Portfolio Grid 01" }, 
      { link: "/portfolio-2", title: "Portfolio Grid 02" }, 
      { link: "/portfolio-3", title: "Portfolio Grid 03" }, 
      { link: "/portfolio-grid-full", title: "Portfolio Grid Full" }, 
      { link: "/portfolio-masonry", title: "Portfolio Masonry" }, 
      { link: "/portfolio-masonry-2", title: "Portfolio Masonry 02" }, 
      { link: "/portfolio-slider-full", title: "Portfolio SLider Full" }, 
      { link: "/portfolio-slider-box", title: "Portfolio Slider Box" }, 
      { link: "/portfolio-single-1", title: "Portfolio Single 01" }, 
      { link: "/portfolio-single-2", title: "Portfolio Single 02" }, 
      { link: "/portfolio-single-3", title: "Portfolio Single 03" }, 
      { link: "/portfolio-single-4", title: "Portfolio Single 04" }, 
    ],
  }, 
  {
    id: 4,
    mega_menu: true,
    has_dropdown: true,
    has_children: false, 
    title: "Elements",
    link: "#",
    mega_menus: [
      // layout 01
      {
        link: "#",
        title: "Elements 1",
        layout: [
          { link: "/accordion", title: "Accordion" },
          { link: "/alerts", title: "Alerts" },
          { link: "/badges", title: "Badges" },
          { link: "/brands", title: "Brand Logo" },
          { link: "/breadcrumbs", title: "Breadcrumbs" },
          { link: "/buttons", title: "Buttons" },
        ],
      },
      // layout 02
      {
        link: "#",
        title: "Elements 2",
        layout: [
          { link: "/columns", title: "columns" }, 
          { link: "/counter", title: "Counter" }, 
          { link: "/contact-form", title: "contact form" }, 
          { link: "/call-to-action", title: "Call to action" }, 
          { link: "/dropdowns", title: "dropdowns" }, 
          { link: "/fancy-text", title: "fancy tex" }, 
        ],
      },
      // layout 03
      {
        link: "#",
        title: "Elements 3",
        layout: [
          { link: "/footer", title: "footer" }, 
          { link: "/gallery", title: "gallery" }, 
          { link: "/lightbox", title: "lightbox" }, 
          { link: "/page-titles", title: "page titles" }, 
          { link: "/post", title: "Latest Post" }, 
          { link: "/progress-bar", title: "Progress bar" }, 
        ],
      },
      // layout 04
      {
        link: "#",
        title: "Elements 4",
        layout: [
          { link: "/subscribe", title: "subscribe" }, 
          { link: "/tab", title: "Tab" }, 
          { link: "/team-elements", title: "Team" }, 
          { link: "/testimonials", title: "testimonials" }, 
          { link: "/tooltips", title: "tooltips" }, 
          { link: "/typography", title: "typography" }, 
        ],
      },
    ],
  },
  {
    id: 5,
    mega_menu: false,
    has_dropdown: true,
    has_children: false,
    title: "Blog",
    link: "/blog",
    sub_menus: [
      { link: "/blog", title: "Blog Right Sidebar" }, 
      { link: "/blog-left-sidebar", title: "Blog Left Sidebar" }, 
      { link: "/blog-no-sidebar", title: "Blog No Sidebar" }, 
      { link: "/blog-2-column", title: "Blog two Column 01" }, 
      { link: "/blog-2-column-2", title: "Blog two Column 02" }, 
      { link: "/blog-2-column-masonry", title: "Blog two Col Masonry" }, 
      { link: "/blog-3-column", title: "Blog Three Column" }, 
      { link: "/blog-3-column-masonry", title: "Blog Three Col Masonry" }, 
      { link: "/blog-details", title: "Blog Image Details" }, 
      { link: "/blog-details-audio", title: "Blog Audio Details" }, 
      { link: "/blog-details-video", title: "Blog Video Details" }, 
      { link: "/blog-details-gallery", title: "Blog Gallery Details" }, 
    ],
  }, 
  {
    id: 5,
    mega_menu: false,
    has_dropdown: true,
    has_children: false,
    title: "Shop",
    link: "/shop",
    sub_menus: [
      { link: "/shop", title: "Shop Default" },  
      { link: "/shop-list", title: "Shop List" },  
      { link: "/product-details", title: "Product Details" },  
      { link: "/shopping-bag", title: "Shopping Cart" },  
      { link: "/checkout", title: "Checkout" },  
      { link: "/wishlist", title: "Wishlist" },  
    ],
  }, 
];
export default menu_data;
