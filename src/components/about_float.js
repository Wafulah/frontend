// const Popup = ({ onClose }) => {
//   const contentRef = useRef(null);
   
//   useEffect(() => {
//     // Scroll the content_div to the top when the popup is opened
//     contentRef.current.scrollTop = 0;

//     // Scroll the page to the top
//     window.scrollTo(0, 0);

//     // Disable scrolling on the body
//     document.body.style.overflow = "hidden";

//     return () => {
//       // Enable scrolling on the body when the popup is closed
//       document.body.style.overflow = "auto";
//     };
//   }, []);
//   return (
//     <div className="service_glassmorphism popup">
//       <div className=" popup-content">
//         <div ref={contentRef} className="overflow-y-auto content_div">
//           <div className="close-btn-container">
//             <button className="close-btn" onClick={onClose}>
//               <FaTimes className="close-icon" />
//             </button>
//           </div>
//           <div className="mx-auto w-3/4 ">
//             <p className="text-4xl pt-3 text_grey font-bold ">about us</p>
//             <p className="lucid_font text-lg pt-3 text_grey font-bold ">
//               Handy Creations <br />
//               Norwich Union House, 2nd Floor, Mama Ngina Street. <br />
//               P. O. Box 2368 - 00100 Nairobi Kenya. <br />
//               Tel: +254 20 2633038 | Mobile: +254 703 599 000 <br />
//               Web: www.handycreations.biz | Email:info@handycreations.biz
//               <br />
//             </p>
//             <p className="lucid_font pt-5 pb-10 font-semibold opacity-75">
//               Handy Creations is a leading graphic design and web design company
//               based in Nairobi, Kenya. With over a decade of experience since
//               our establishment in 2010, we strive to ensure our clients'
//               long-term satisfaction through our services in graphic design,
//               print media, and web design. <br />
//               <br />
//               Our company is located at Norwich Union House, conveniently
//               situated on Mama Ngina Street. We are committed to delivering
//               high-quality design solutions that help businesses and individuals
//               get recognized and leave a lasting impression. Whether it's
//               creating logos and letterheads, designing posters and banners, or
//               developing complete corporate identity packages, we offer a wide
//               range of services to meet your branding needs.
//               <br />
//               <br />
//               At Handy Creations, we understand the importance of a strong brand
//               identity. Our team of experienced graphic designers works closely
//               with our clients to develop brand positions, promises,
//               personalities, and stories that resonate with their target
//               audiences. We believe in building brands that stand out and make a
//               meaningful impact in the market.
//               <br />
//               <br />
//               In addition to our graphic design services, we also specialize in
//               web design. We believe that a professional and visually appealing
//               website is crucial for the success of any individual or company.
//               Whether you need a brand new website or want to refresh your
//               existing one, our web design professionals are here to help. We
//               guide you through the entire process, ensuring that your website
//               not only looks great but also reflects the quality of your brand.
//               <br />
//               <br />
//               To complement our design services, we also offer domain
//               registration, web hosting, social media management, strategic
//               consultation, lead generation, customer retention, SMS marketing,
//               and email marketing solutions. Our goal is to provide
//               comprehensive and affordable business solutions that help our
//               clients achieve their marketing and branding objectives.
//               <br />
//               <br />
//               You can rely on Handy Creations to deliver exceptional results. We
//               are dedicated to continuous improvement, ensuring that we stay
//               up-to-date with the latest design trends and technologies. Our
//               commitment to quality, service, and productivity sets us apart as
//               a trusted provider in the industry.
//               <br />
//               <br />
//               Contact us today to discuss your design and branding needs. We
//               look forward to working with you and helping your brand shine.
//             </p>
//             <div>
//               <div className="flex justify-between">
//                 <div className="about_logos1">
//                   <img
//                     src={BritamImage}
//                     alt="Britam"
//                     className="w-full h-full bg-cover"
//                   />
//                 </div>
//                 <div className="about_logos1">
//                   <img
//                     src={GuardImage}
//                     alt="Guardian"
//                     className="w-full h-full bg-cover"
//                   />
//                 </div>
//                 <div className="about_logos1">
//                   <img
//                     src={DahabImage}
//                     alt="Dahabshiil"
//                     className="w-full h-full bg-cover"
//                   />
//                 </div>
//               </div>
//               <div className="flex justify-center">
//                 <div className="about_logos2">
//                   <img
//                     src={TiImage}
//                     alt="Times International"
//                     className="w-full h-full bg-cover"
//                   />
//                 </div>
//                 <div className="about_logos2">
//                   <img
//                     src={BusinessImage}
//                     alt="Bussiness International"
//                     className="w-full h-full bg-cover"
//                   />
//                 </div>
//               </div>
//             </div>
//             <div className="footer flex justify-center">
//               <p className="lucid_font pb-5 italic text-sm opacity-50">
//                 &copy; 2023handycreations. All Rights Reserved.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }; 
  // const [showPopup, setShowPopup] = useState(false);

  // const handleLearnMoreClick = () => {
  //   setShowPopup(true);
  //   document.body.style.overflow = "hidden"; // Disable scrolling
  // };

  // const handleClosePopup = () => {
  //   setShowPopup(false);
  //   document.body.style.overflow = "auto"; // Enable scrolling
  // }; 
  
// import BritamImage from "../assets/britam.png";
// import DahabImage from "../assets/dahabshiil.png";
// import GuardImage from "../assets/cigna.png";
// import TiImage from "../assets/Ti.png";
// import BusinessImage from "../assets/bussiness_times.png";