import  { useState, useEffect } from 'react';

const AnimatedCard = ({ texts, images }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [textAnimation, setTextAnimation] = useState('in');
  const [imageAnimation, setImageAnimation] = useState('in');
    const [previousImage, setPreviousImage] = useState(null)
    const [previousText, setPreviousText] = useState(null)

    const currentText = texts[currentTextIndex]
    const currentImage = images[currentImageIndex]
  
    useEffect(() => {
        if(texts.length === 0 || images.length === 0) return
    
    
       const textTimer = setTimeout(() => {
            setTextAnimation('out');
            setTimeout(() => {
              setPreviousText(currentText)
              setCurrentTextIndex((prev) => (prev + 1) % texts.length);
              setTextAnimation('in');
            }, 500)
          }, 2000);
        
        const imageTimer = setTimeout(() => {
            setImageAnimation('out');
            setTimeout(() => {
              setPreviousImage(currentImage)
              setCurrentImageIndex((prev) => (prev + 1) % images.length);
               setImageAnimation('in');
            }, 500)

          }, 2000);
    
        return () => {
          clearTimeout(textTimer)
          clearTimeout(imageTimer);
      }
      }, [currentTextIndex, currentImageIndex, texts, images]);

  return (
    <div className="w-7/12 bg-gray-100 p-4 flex items-center relative overflow-hidden">
      {/* Image Container */}
      <div className={`relative w-1/2 mr-4 flex justify-start items-center transition-all duration-500 ${imageAnimation === 'out' ? 'opacity-0 transform translate-x-[-20px]' : 'opacity-100 transform translate-x-[0px]'}`}>
        {previousImage && 
         <img
          key={`prev-${previousImage}`}
            src={previousImage}
            alt="Previous Image"
            className="w-full h-auto object-cover absolute inset-0 opacity-0 transform translate-x-[-20px]"
          />
        }
          <img
            key={currentImage}
            src={currentImage}
            alt="Animated Image"
            className={`w-full h-auto object-cover ${imageAnimation === 'in' ? 'opacity-100 transform translate-x-[0px] ' : 'opacity-0  transform translate-x-[20px] '} transition-all duration-500 `}
          />

      </div>

      {/* Text Container */}
      <div className={`w-1/2 text-right transition-all duration-500 flex justify-end items-center ${textAnimation === 'out' ? 'opacity-0 transform translate-y-[-20px] ' : 'opacity-100 transform translate-y-[0px]'}`}>
            
        {previousText && 
             <span
             key={`prev-${previousText}`}
           className="text-2xl absolute top-[-20px] right-0 opacity-0"
           >
            {previousText}
          </span>}
        <span
            key={currentText}
          className={`text-2xl ${textAnimation === 'in' ? 'opacity-100 transform translate-y-[0px] ' : 'opacity-0 transform translate-y-[20px]'} transition-all duration-500  `}
        >
          {currentText}
        </span>
      </div>
    </div>
  );
};

export default AnimatedCard;