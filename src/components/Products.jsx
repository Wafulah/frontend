import React from "react";
import "./Products.css";

const Products = () => {
  return (
    <div className="product_home">
      <div className="h-11/12 holder">
        {" "}
        <div className=" flex justify-center">
          <p className="text-4xl text_grey pt-10 font-bold ">Our Products</p>
        </div>
        <div className="h-full w-full ">
          <div className="flex w-11/12 mx-auto h-2/4 justify-center">
            <div className="w-1/3 h-11/12 m-2  product_box">
              <div className="gifts pattern flex w-full h-full">
                <div className="gifts_div  product_box  ">
                  <p className="text-white text-center font-bold text-sm pt-5">
                    Get Branded
                  </p>
                  <p className=" pl-5 opacity-75 text-white font-bold opt_font ">
                    &#9733; Gift Bags
                  </p>
                  <p className="  pl-5 opacity-75 text-white font-bold opt_font ">
                    &#9733; Wedding Cards
                  </p>
                  <p className="pl-5 opacity-75 text-white font-bold opt_font ">
                    &#9733; Books
                  </p>
                  <p className=" pl-5 opacity-75 text-white font-bold opt_font ">
                    &#9733; Bussiness Card
                  </p>
                  <p className="  pl-5 opacity-75 text-white font-bold opt_font ">
                    &#9733; Flyers
                  </p>
                  <p className="  pl-5 opacity-75 text-white font-bold opt_font ">
                    &#9733; Banners
                  </p>
                  <p className="  pl-5 opacity-75 text-white font-bold opt_font ">
                    &#9733; Shirts
                  </p>
                  <p className="  pl-5 opacity-75 text-white font-bold opt_font ">
                    &#9733; Menus
                  </p>
                  <p className="  pl-5 opacity-75 text-white font-bold opt_font ">
                    &#9733; Magazines 
                  </p>
                </div>
              </div>
            </div>
            <div className="w-2/4 h-11/12 m-2 cups product_box">
              <div className="cups_div">
                <div className="cup_info">
                  <p className="text-white text-center font-bold text-sm pt-5">
                    We Offer{" "}
                  </p>
                  <ul className="text-white">
                    <li className=" pl-5 opacity-75 text-white font-bold opt_font">
                      &#9733; Cups
                    </li>
                    <li className=" pl-5 opacity-75 text-white font-bold opt_font">
                      &#9733; Mugs
                    </li>
                    <li className=" pl-5 opacity-75 text-white font-bold opt_font">
                      &#9733; Thermos Flask
                    </li>
                    <li className=" pl-5 opacity-75 text-white font-bold opt_font">
                      &#9733; Water Bottles
                    </li>
                    <li className=" pl-5 opacity-75 text-white font-bold opt_font">
                      &#9733; Plates
                    </li>
                  </ul>
                  <p className="text-white text-center font-bold text-sm pt-1">
                    Contact us for
                  </p>
                  <ul className="text-white">
                    <li className=" pl-5 opacity-75 text-white font-bold opt_font">
                      &#9733; Tags{" "}
                    </li>
                    <li className=" pl-5 opacity-75 text-white font-bold opt_font">
                      &#9733; Key Holder
                    </li>
                    <li className=" pl-5 opacity-75 text-white font-bold opt_font">
                      &#9733; Stamps
                    </li>
                    <li className=" pl-5 opacity-75 text-white font-bold opt_font">
                      &#9733; Bracelets
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-2/4 w-2/3 justify-center mx-auto">
            <div className=" web_div w-2/4 m-2 bg-white h-3/4 product_box">
            <div className="inner_web_div">
            <p className="text-white text-center font-bold text-sm pt-5">
                    Go Digital
                  </p>
                  <p className="  pl-5 opacity-75 text-white font-bold opt_font ">
                    &#9733; Web Design
                  </p>
                  <p className="  pl-5 opacity-75 text-white font-bold opt_font ">
                    &#9733; Website Development 
                  </p>
                  <p className="  pl-5 opacity-75 text-white font-bold opt_font ">
                    &#9733; Web Hosting 
                  </p>
                  
                  <p className="  pl-5 opacity-75 text-white font-bold opt_font ">
                    &#9733; Domain Registration
                  </p>
                  <p className="  pl-5 opacity-75 text-white font-bold opt_font ">
                    &#9733; Digital Marketing 
                  </p>
                  <p className="  pl-5 opacity-75 text-white font-bold opt_font ">
                    &#9733; Branding and Communication                  </p>

            </div>

            </div>
            <div className="w-1/3 m-2 bg-white h-3/4 product_box">
            <div className="more_info">
            <p className="text-white text-center font-bold text-sm pt-5">
                    Get Noticed Today!
                  </p>
                  <p className=" text-sm p-5 opacity-75 text-white font-bold opt_font ">
                   We offer products of a wide variety customized and branded to fit your needs. Visit our expirienced team today to get your brand recognized proffesionally!!!
                     </p>
            </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
