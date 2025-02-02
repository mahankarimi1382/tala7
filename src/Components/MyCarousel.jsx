import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function MyCarousel() {
  return (
    <div className="flex justify-center ">
      <div>
        <Carousel
          infiniteLoop={true}
          autoPlay={true}
          showStatus={false}
          showArrows={true}
          showThumbs={false}
          interval={5000}
          centerMode={true}
          centerSlidePercentage={15}
          showIndicators={false}
          stopOnHover={false}
          useKeyboardArrows={true}
          width={800}
        >
          <div>
          <div className="imageBox">
              <div className="imageInn">
                <img src="src\assets\images\Image1.jpg" alt="Default Image" />
              </div>
              <div className="hoverImg animate-fade-in-for-hover-image">
                <img src="src\assets\images\Image2.jpg" alt="Profile Image" />
              </div>
            </div>
            {/* <p className="legend">Legend 1</p> */}
          </div>
          <div>
          <div className="imageBox">
              <div className="imageInn">
                <img src="src\assets\images\Image2.jpg" alt="Default Image" />
              </div>
              <div className="hoverImg animate-fade-in-for-hover-image">
                <img src="src\assets\images\Image4.jpg" alt="Profile Image" />
              </div>
            </div>
            {/* <p className="legend">Legend 2</p> */}
          </div>
          <div>
          <div className="imageBox">
              <div className="imageInn">
                <img src="src\assets\images\Image3.png" alt="Default Image" />
              </div>
              <div className="hoverImg animate-fade-in-for-hover-image">
                <img src="src\assets\images\Image4.jpg" alt="Profile Image" />
              </div>
            </div>
            {/* <p className="legend">Legend 3</p> */}
          </div>
          <div>
          <div className="imageBox">
              <div className="imageInn">
                <img src="src\assets\images\Image4.jpg" alt="Default Image" />
              </div>
              <div className="hoverImg animate-fade-in-for-hover-image">
                <img src="src\assets\images\Image5.jpg" alt="Profile Image" />
              </div>
            </div>
            {/* <p className="legend">Legend 1</p> */}
          </div>
          <div>
            <div className="imageBox">
              <div className="imageInn">
                <img src="src\assets\images\Image5.jpg" alt="Default Image" />
              </div>
              <div className="hoverImg animate-fade-in-for-hover-image">
                <img src="src\assets\images\Image1.jpg" alt="Profile Image" />
              </div>
            </div>

            {/* <p className="legend">Legend 2</p> */}
          </div>
          <div>
          <div className="imageBox">
              <div className="imageInn">
                <img src="src\assets\images\Image6.png" alt="Default Image" />
              </div>
              <div className="hoverImg animate-fade-in-for-hover-image">
                <img src="src\assets\images\welcome03.jpg" alt="Profile Image" />
              </div>
            </div>
            {/* <p className="legend">Legend 3</p> */}
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default MyCarousel;
