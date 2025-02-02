import  { useState, useEffect } from 'react'
import img3 from "../assets/images/Image3.png"
import img6 from "../assets/images/Image6.png"
import CardText from '../CardText'

const CardWithAnimation = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const [textAnimation, setTextAnimation] = useState('fade-in');
  const [imageAnimation, setImageAnimation] = useState('fade-in');


  const texts = [
    <CardText/>,
    <CardText/>,



  ];
  const images = [
    img6 ,
    img3 ,


  
  ];
  useEffect(() => {
      const intervalId = setInterval(() => {
        // Text animation
        setTextAnimation('fade-out-up');
        setTimeout(() => {
          setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
          setTextAnimation('fade-in-down');
        }, 1000); // Wait for the fade out animation.

        // Image Animation
        setImageAnimation('fade-out-left');
         setTimeout(() => {
          setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
           setImageAnimation('fade-in-right');
        }, 1000); // Wait for the fade out animation.
      }, 2000); // Change every 2 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [texts, images]);


  return (
    <div className="flex justify-center items-center h-screen -z-0">

    <div className="w-7/12 bg-gradient-to-l  from-teal-950 to-teal-900 rounded-lg shadow-md overflow-visible relative h-60">
      {/* Image Container */}
      {/* با تغییر قسمت دو سوم می توان میزان برون رفتگی حلقه از کادر را مدیریت کرد */}
      <div className={`absolute top-1/2 left-10 transform -translate-y-1/2 transition-all duration-500 ${imageAnimation === 'fade-in-right' ? 'opacity-100 -translate-x-2' : imageAnimation === 'fade-out-left' ? 'opacity-0 -translate-x-2/3' : 'opacity-100 translate-x-'}`}>
          <img src={images[imageIndex]} alt="Animated Image" className="w-60 h-40 object-cover rounded-sm filter drop-shadow-[0_10px_5px_rgba(0,0,0,0.25)] " />
      </div>


      {/* Text Container */}
      <div className={`absolute top-10 right-14 transform -translate-y-1/2 text-right transition-all duration-500  ${textAnimation === 'fade-in-down' ? 'opacity-100 translate-y-0' : textAnimation === 'fade-out-up' ? 'opacity-0 -translate-y-1/2' : 'opacity-100 translate-y-0'}`}>
        <p className="text-xl font-semibold text-white">
          {texts[textIndex]}
        </p>
      </div>
    </div>
    </div>

  );
};

export default CardWithAnimation;