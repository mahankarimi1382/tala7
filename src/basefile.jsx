import { useEffect } from "react";
import "preline";
import VerticalCarousel from "./VerticalCarousel";

const Basefile = () => {
  useEffect(() => {
    import("preline").then((module) => module.default());
  }, []);

  return (
   <div>
     <div className="flex flex-col">
     
      <div>
        <VerticalCarousel />
      </div>
    </div>
   </div>
  );
};

export default Basefile;
