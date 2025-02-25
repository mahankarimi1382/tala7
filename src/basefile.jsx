import { useEffect } from "react";
import "preline";
import ImageCarousel from "./VerticalCarousel";

const Basefile = () => {
  useEffect(() => {
    import("preline").then((module) => module.default());
  }, []);

  return (
   <div>
     <div className="  flex justify-center md:justify-start md:mr-3 ">
     
      <div>
        <ImageCarousel />
      </div>
    </div>
   </div>
  );
};

export default Basefile;
