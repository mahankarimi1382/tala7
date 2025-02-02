import Carousel from "../src/Carousel";

function UpCardCarouselManager() {
  const cardData = [
    { IMGAddress: "../src/assets/img/ring.png" },
    { IMGAddress: "../src/assets/img/wedding-ring-png-45279.png" },
    { IMGAddress: "../src/assets/img/white-gold.png" },
    ];

  return (
    <div>
        <Carousel cards={cardData} />
    </div>
  );
}
export default UpCardCarouselManager