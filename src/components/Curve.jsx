import "./Curve.css";
import "animate.css";

const Curve = () => {
  return (
    <div className="curv_div">
      <div className=" sm:h-1/3 sm:mt-16 flex justify-center">
        <p className="sm:pt-20 sm:text-3xl 2xl:text-6xl text-4xl pt-10 text_grey font-bold ">about us</p>
      </div>
      <div className=" sm:mt-20 sm:w-11/12 sm:block 2xl:w-2/4 w-1/3 mx-auto flex justify-center">
      
        <p className="sm:text-xs 2xl:text-xl px-3 text_grey font-semibold animate__animated animate__fadeInLeft text-sm py-2 opacity-50 text-cent ">
          Unleash the power of captivating designs, impeccable branding, and
          flawless printing to make your vision come to life. Come embark on a
          creative journey with us, where innovation and excellence merge to
          redefine the possibilities of printing, branding, and design.
        </p>
      </div>
    </div>
  );
};

export default Curve;
