import img1 from "../src/assets/img/containerring1.png";
import img2 from "../src/assets/img/containerring2.png";
import img3 from "../src/assets/img/ring8.jpg";
import img4 from "../src/assets/img/ring9.jpg";
import img5 from "../src/assets/img/containerring4.png";
import img6 from "../src/assets/img/containerring3.png";
import img7 from "../src/assets/img/ring7.jpg";
import img8 from "../src/assets/img/HajHassan.jpg";
import img9 from "../src/assets/img/GoldenRing.jpg";
import img10 from "../src/assets/img/ring.jpg";
import PishnahadCards from "./PishnahadCards";

const products = [
  { ImageAddress: img1, SecondImageAddress: img2, RingName: "حلقه زیبا", FirstPrice: "1000", SecondPrice: "50", MySecond: "57", MyMiniute: "35", MyHour: "11", MyDays: "143", MyDiscount: "17", MinusOrPlus: "-" },
  { ImageAddress: img2, SecondImageAddress: img3, RingName: "حلقه زیبا", FirstPrice: "10000", SecondPrice: "60", MySecond: "36", MyMiniute: "35", MyHour: "11", MyDays: "75", MyDiscount: "17", MinusOrPlus: "-" },
  { ImageAddress: img3, SecondImageAddress: img4, RingName: "حلقه زیبا", FirstPrice: "30669", SecondPrice: "2587", MySecond: "57", MyMiniute: "25", MyHour: "11", MyDays: "25", MyDiscount: "15", MinusOrPlus: "-" },
  { ImageAddress: img4, SecondImageAddress: img5, RingName: "حلقه زیبا", FirstPrice: "69523", SecondPrice: "25876", MySecond: "32", MyMiniute: "25", MyHour: "10", MyDays: "250", MyDiscount: "16", MinusOrPlus: "-" },
  { ImageAddress: img5, SecondImageAddress: img6, RingName: "حلقه زیبا", FirstPrice: "1000", SecondPrice: "50", MySecond: "57", MyMiniute: "35", MyHour: "11", MyDays: "143", MyDiscount: "17", MinusOrPlus: "-" },
  { ImageAddress: img6, SecondImageAddress: img7, RingName: "حلقه زیبا", FirstPrice: "2587", SecondPrice: "50", MySecond: "57", MyMiniute: "35", MyHour: "11", MyDays: "143", MyDiscount: "17", MinusOrPlus: "-" },
  { ImageAddress: img7, SecondImageAddress: img8, RingName: "حلقه زیبا", FirstPrice: "25696", SecondPrice: "50", MySecond: "57", MyMiniute: "35", MyHour: "11", MyDays: "143", MyDiscount: "17", MinusOrPlus: "-" },
  { ImageAddress: img8, SecondImageAddress: img9, RingName: "حلقه زیبا", FirstPrice: "2586336", SecondPrice: "50", MySecond: "57", MyMiniute: "35", MyHour: "11", MyDays: "143", MyDiscount: "17", MinusOrPlus: "-" },
  { ImageAddress: img9, SecondImageAddress: img10, RingName: "حلقه زیبا", FirstPrice: "889636", SecondPrice: "50", MySecond: "57", MyMiniute: "35", MyHour: "11", MyDays: "143", MyDiscount: "17", MinusOrPlus: "-" },
  { ImageAddress: img10, SecondImageAddress: img1, RingName: "حلقه زیبا", FirstPrice: "25663", SecondPrice: "50", MySecond: "57", MyMiniute: "35", MyHour: "11", MyDays: "143", MyDiscount: "17", MinusOrPlus: "-" },
  { ImageAddress: img1, SecondImageAddress: img2, RingName: "حلقه زیبا", FirstPrice: "9633365", SecondPrice: "50", MySecond: "57", MyMiniute: "35", MyHour: "11", MyDays: "143", MyDiscount: "17", MinusOrPlus: "-" },
  { ImageAddress: img2, SecondImageAddress: img3, RingName: "حلقه زیبا", FirstPrice: "258874", SecondPrice: "50", MySecond: "57", MyMiniute: "35", MyHour: "11", MyDays: "143", MyDiscount: "17", MinusOrPlus: "-" },
  { ImageAddress: img3, SecondImageAddress: img4, RingName: "حلقه زیبا", FirstPrice: "366698", SecondPrice: "50", MySecond: "57", MyMiniute: "35", MyHour: "11", MyDays: "143", MyDiscount: "17", MinusOrPlus: "-" },
  { ImageAddress: img4, SecondImageAddress: img6, RingName: "حلقه زیبا", FirstPrice: "336636", SecondPrice: "50", MySecond: "57", MyMiniute: "35", MyHour: "11", MyDays: "143", MyDiscount: "17", MinusOrPlus: "-" },
  { ImageAddress: img8, SecondImageAddress: img3, RingName: "حلقه زیبا", FirstPrice: "669963", SecondPrice: "50", MySecond: "57", MyMiniute: "35", MyHour: "11", MyDays: "143", MyDiscount: "17", MinusOrPlus: "-" },
  { ImageAddress: img9, SecondImageAddress: img5, RingName: "حلقه زیبا", FirstPrice: "69963", SecondPrice: "50", MySecond: "57", MyMiniute: "35", MyHour: "11", MyDays: "143", MyDiscount: "17", MinusOrPlus: "-" },
  { ImageAddress: img6, SecondImageAddress: img2, RingName: "حلقه زیبا", FirstPrice: "36687", SecondPrice: "50", MySecond: "57", MyMiniute: "35", MyHour: "11", MyDays: "143", MyDiscount: "17", MinusOrPlus: "-" },
  { ImageAddress: img3, SecondImageAddress: img10, RingName: "حلقه زیبا", FirstPrice: "633254", SecondPrice: "50", MySecond: "57", MyMiniute: "35", MyHour: "11", MyDays: "143", MyDiscount: "17", MinusOrPlus: "-" },
  { ImageAddress: img7, SecondImageAddress: img4, RingName: "حلقه زیبا", FirstPrice: "546448", SecondPrice: "50", MySecond: "57", MyMiniute: "35", MyHour: "11", MyDays: "143", MyDiscount: "17", MinusOrPlus: "-" },
  { ImageAddress: img9, SecondImageAddress: img4, RingName: "حلقه زیبا", FirstPrice: "45656", SecondPrice: "50", MySecond: "57", MyMiniute: "35", MyHour: "11", MyDays: "143", MyDiscount: "17", MinusOrPlus: "-" }
];

function AllProducts() {
  return (
    <div className="bg-gradient-to-bl from-white via-[#fbe8cf] to-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-6">
        {products.map((product, index) => (
          <PishnahadCards key={index} {...product} />
        ))}
      </div>
    </div>
  );
}

export default AllProducts;
