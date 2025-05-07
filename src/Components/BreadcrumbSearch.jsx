import { Search } from "lucide-react";
import PishnahadCards from "../PishnahadCards";
import img1 from "../assets/img/containerring1.png";
import img2 from "../assets/img/containerring2.png";
import { useState, useEffect } from "react";

export default function BreadcrumbSearch({ 
  priceRange = { min: 100000, max: 5000000000 },
  benefitRange = { min: 0, max: 25 }, 
  discountRange = { min: 0, max: 25 }, 
  productFilters = {
    isAdult: false,
    isBaby: false,
    isWoman: false,
    isMan: false
  } 
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchProducts = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://tala7.com:44/api/DocStore/Get_Products_Show_InVitrin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          metadata: {
            userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            userName: "string",
            userNameforC: "string"
          },
          pagenumber: 1,
          pagesize: 15
        })
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log('Initial Products API Response:', data);
      // Map the initial products API response
      const mappedProducts = data.response_List?.map(product => ({
        productName: product.productName,
        lastPrice: product.lastPrice,
        lastPriceWithDiscount: product.lastPriceWithDiscount,
        logoImage1: product.logoImage1,
        logoImage2: product.logoImage2,
        discount_Benefit_Percent: product.discount_Benefit_Percent
      })) || [];
      setProducts(mappedProducts);
    } catch (error) {
      console.error("Error fetching initial data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch products on component mount
  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSearch = async () => {
    setIsLoading(true);
    const requestBody = {
      term: searchTerm,
      price_Start: priceRange?.min || 100000,
      price_End: priceRange?.max || 5000000000,
      benefit_Percent_Start: benefitRange?.min || 0,
      benefit_Percent_End: benefitRange?.max || 25,
      discount_Benefit_Percent_Start: discountRange?.min || 0,
      discount_Benefit_Percent_End: discountRange?.max || 25,
      isAdult: productFilters?.isAdult || false,
      isBaby: productFilters?.isBaby || false,
      isWoman: productFilters?.isWoman || false,
      isMan: productFilters?.isMan || false,
      freeShipment: false,
      specialSale: false,
      product_Size: "",
      gold_Color: "",
      gold_Model: "",
      gold_Made: "",
      isInstallment: false
    };

    console.log('Search Request Body:', requestBody);

    try {
      const response = await fetch("http://tala7.com:44/api/DocStore/Search_Products_In_InVitrin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log('Search API Response:', data);
      // Map the search API response
      const mappedProducts = data.response_List?.map(product => ({
        productName: product.name,
        lastPrice: product.price,
        lastPriceWithDiscount: product.priceWithDiscount,
        logoImage1: product.image1,
        logoImage2: product.image2,
        discount_Benefit_Percent: product.discountPercent
      })) || [];
      setProducts(mappedProducts);
    } catch (error) {
      console.error("Error fetching search data:", error);
      console.error("Error details:", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
   <div className="">
     <div className="flex flex-col">
      <div className=" mt-6 md:mt-1 md:p-4 space-y-4 ms-10 sm:ms-14 ">
        {/* Breadcrumb */}
        <nav className="text-gray-500 text-sm">
          <a href="#" className="hover:text-black">
            خانه
          </a>
          <span className="mx-1">/</span>
          <a href="#" className="text-black font-bold">
            دسته بندی نشده
          </a>
        </nav>

        {/* Search Bar */}
        <div className="relative md:w-[60vw] w-[80vw] max-w-4xl ">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
            size={18}
            onClick={handleSearch}
          />
          <input
            type="text"
            placeholder="جستجوی محصولات"
            className="w-full border border-gray-300 rounded-md py-2 pl-10 pr-4 text-right placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
          />
        </div>

        {/* Loading Spinner */}
        {isLoading && (
          <div className="flex justify-center mt-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
          </div>
        )}
      </div>
      <div className="grid lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 grid-cols-1 md:grid-cols-2 CardsArea mx-auto">
        {products.map((product, index) => {
          console.log('Product being rendered:', product); // Debug log
          return (
            <PishnahadCards
              key={index}
              productName={product.productName}
              lastPrice={product.lastPrice}
              lastPriceWithDiscount={product.lastPriceWithDiscount}
              logoImage1={product.logoImage1}
              logoImage2={product.logoImage2}
              discount_Benefit_Percent={product.discount_Benefit_Percent}
              MinusOrPlus="-"
            />
          );
        })}
      </div>
     </div>
   </div>
  );
}
