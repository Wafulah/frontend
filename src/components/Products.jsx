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
                  <p className="text-white  font-bold text-sm pb-1 p-5">
                    Get Branded
                  </p>
                  <p className=" pl-5 opacity-75 text-white font-bold opt_font ">
                     Gift Bags
                  </p>
                  <p className="  pl-5 opacity-75 text-white font-bold opt_font ">
                     Wedding Cards
                  </p>
                  <p className="pl-5 opacity-75 text-white font-bold opt_font ">
                     Books
                  </p>
                  <p className=" pl-5 opacity-75 text-white font-bold opt_font ">
                     Bussiness Card
                  </p>
                  <p className="  pl-5 opacity-75 text-white font-bold opt_font ">
                     Flyers
                  </p>
                  <p className="  pl-5 opacity-75 text-white font-bold opt_font ">
                     Banners
                  </p>
                  <p className="  pl-5 opacity-75 text-white font-bold opt_font ">
                     Shirts
                  </p>
                  <p className="  pl-5 opacity-75 text-white font-bold opt_font ">
                     Menus
                  </p>
                  <p className="  pl-5 opacity-75 text-white font-bold opt_font ">
                     Magazines 
                  </p>
                </div>
              </div>
            </div>
            <div className="w-2/4 h-11/12 m-2 cups product_box">
              <div className="cups_div">
                <div className="cup_info">
                  <p className="text-white  font-bold text-sm pb-1 p-5">
                    We Offer{" "}
                  </p>
                  <ul className="text-white">
                    <li className=" pl-5 opacity-75 text-white font-bold opt_font">
                       Cups
                    </li>
                    <li className=" pl-5 opacity-75 text-white font-bold opt_font">
                       Mugs
                    </li>
                    <li className=" pl-5 opacity-75 text-white font-bold opt_font">
                       Thermos Flask
                    </li>
                    <li className=" pl-5 opacity-75 text-white font-bold opt_font">
                       Water Bottles
                    </li>
                    <li className=" pl-5 opacity-75 text-white font-bold opt_font">
                       Plates
                    </li>
                  </ul>
                  <p className="text-white  font-bold text-sm pt-1 pl-5">
                    Contact us for
                  </p>
                  <ul className="text-white">
                    <li className=" pl-5 opacity-75 text-white font-bold opt_font">
                       Tags{" "}
                    </li>
                    <li className=" pl-5 opacity-75 text-white font-bold opt_font">
                       Key Holder
                    </li>
                    <li className=" pl-5 opacity-75 text-white font-bold opt_font">
                       Stamps
                    </li>
                    <li className=" pl-5 opacity-75 text-white font-bold opt_font">
                       Bracelets
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-2/4 w-2/3 justify-center mx-auto">
            <div className=" web_div w-2/4 m-2 bg-white h-3/4 product_box">
            <div className="inner_web_div">
            <p className="text-white  font-bold text-sm pb-1 p-5">
                    Go Digital
                  </p>
                  <p className="  pl-5 opacity-75 text-white font-bold opt_font ">
                     Web Design
                  </p>
                  <p className="  pl-5 opacity-75 text-white font-bold opt_font ">
                     Website Development 
                  </p>
                  <p className="  pl-5 opacity-75 text-white font-bold opt_font ">
                     Web Hosting 
                  </p>
                  
                  <p className="  pl-5 opacity-75 text-white font-bold opt_font ">
                     Domain Registration
                  </p>
                  <p className="  pl-5 opacity-75 text-white font-bold opt_font ">
                     Digital Marketing 
                  </p>
                  <p className="  pl-5 opacity-75 text-white font-bold opt_font ">
                     Branding and Communication                  </p>

            </div>

            </div>
            <div className="w-1/3 m-2 bg-white h-3/4 product_box">
            <div className="more_info">
            <p className="text-white  font-bold text-sm pb-1 p-5">
                    Get Noticed Today!
                  </p>
                  <p className=" text-sm pt-2 p-5 opacity-75 text-white font-bold opt_font ">
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
