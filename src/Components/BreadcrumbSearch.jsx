import { Search } from "lucide-react";
import PishnahadCards from "../PishnahadCards";
import { useState, useEffect } from "react";

// Helper function to normalize product shape
const mapProductData = (product) => ({
  productName: product.productName || "نامشخص",
  lastPrice: product.lastPrice || 0,
  lastPriceWithDiscount: product.lastPriceWithDiscount || 0,
  logoImage1: product.logoImage1 || "",
  logoImage2: product.logoImage2 || "",
  discount_Benefit_Percent: product.discount_Benefit_Percent || 0,
});

export default function BreadcrumbSearch({
  priceRange = { min: 100000, max: 5000000000 },
  benefitRange = { min: 0, max: 25 },
  discountRange = { min: 0, max: 25 },
  productFilters = {
    isAdult: false,
    isBaby: false,
    isWoman: false,
    isMan: false,
  },
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const fetchProducts = async () => {
    setIsLoading(true);
    setErrorMsg("");

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
            userNameforC: "string",
          },
          pagenumber: 1,
          pagesize: 15,
        }),
      });

      if (!response.ok) throw new Error("Network error during initial fetch");

      const data = await response.json();
      console.log("Initial Products Response:", data);

      const mapped = data.response_List?.map((p) => mapProductData(p)) || [];
      setProducts(mapped);
    } catch (err) {
      console.error("Initial fetch error:", err);
      setErrorMsg("خطا در دریافت محصولات اولیه.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = async () => {
    setIsLoading(true);
    setErrorMsg("");

    console.log("Search Term:", searchTerm);

    const requestBody = {
      term: searchTerm,
      price_Start: priceRange.min,
      price_End: priceRange.max,
      benefit_Percent_Start: benefitRange.min,
      benefit_Percent_End: benefitRange.max,
      discount_Benefit_Percent_Start: discountRange.min,
      discount_Benefit_Percent_End: discountRange.max,
      isAdult: productFilters.isAdult,
      isBaby: productFilters.isBaby,
      isWoman: productFilters.isWoman,
      isMan: productFilters.isMan,
      freeShipment: false,
      specialSale: false,
      product_Size: "",
      gold_Color: "",
      gold_Model: "",
      gold_Made: "",
      isInstallment: false
    };

    console.log("Complete Request Body:", JSON.stringify(requestBody, null, 2));

    try {
      const response = await fetch("http://tala7.com:44/api/DocStore/Search_Products_In_InVitrin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) throw new Error("Network error during search");

      const data = await response.json();
      console.log("Search Response:", data);

      // Handle both array and object responses
      let productsList;
      if (Array.isArray(data)) {
        console.log("API returned array directly");
        productsList = data;
      } else if (data && data.response_List && Array.isArray(data.response_List)) {
        console.log("API returned object with response_List");
        productsList = data.response_List;
      } else {
        console.error("Unexpected API response format:", data);
        throw new Error("Unexpected API response format");
      }

      console.log("Total number of products from API:", productsList.length);
      console.log("All products from API:", productsList);

      // Log all product prices for debugging
      productsList.forEach(product => {
        console.log("Product details:", {
          name: product.productName,
          price: product.lastPrice,
          priceWithDiscount: product.lastPriceWithDiscount,
          type: typeof product.lastPrice,
          rawProduct: product
        });
      });

      // Filter products based on price range
      const filteredProducts = productsList.filter(product => {
        if (!product || typeof product.lastPrice !== 'number') {
          console.warn("Invalid product or missing lastPrice:", product);
          return false;
        }

        // Get the actual price to compare (use discounted price if available)
        const actualPrice = product.lastPriceWithDiscount || product.lastPrice;
        
        // Check if the price is within the range
        const isInRange = actualPrice >= priceRange.min && actualPrice <= priceRange.max;
        
        console.log(`Price comparison for ${product.productName}:`, {
          actualPrice,
          minPrice: priceRange.min,
          maxPrice: priceRange.max,
          isInRange,
          comparison: `${priceRange.min} <= ${actualPrice} <= ${priceRange.max}`,
          rawProduct: product
        });
        
        return isInRange;
      });

      console.log("Number of products after filtering:", filteredProducts.length);
      console.log("Filtered products:", filteredProducts);

      const mappedProducts = filteredProducts.map(product => mapProductData(product));
      console.log("Mapped Products:", mappedProducts);
      setProducts(mappedProducts);

      if (mappedProducts.length === 0) {
        if (productsList.length === 0) {
          setErrorMsg("هیچ محصولی در سیستم موجود نیست.");
        } else {
          setErrorMsg(`هیچ محصولی با قیمت بین ${priceRange.min.toLocaleString()} تا ${priceRange.max.toLocaleString()} تومان یافت نشد.`);
        }
      }
    } catch (err) {
      console.error("Search error:", err);
      setErrorMsg("خطا در جستجوی محصولات.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <div className="flex flex-col">
        <div className="mt-6 md:mt-1 md:p-4 space-y-4 ms-10 sm:ms-14">
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
          <div className="relative md:w-[60vw] w-[80vw] max-w-4xl">
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
                if (e.key === "Enter") handleSearch();
              }}
            />
          </div>

          {/* Loading Spinner */}
          {isLoading && (
            <div className="flex justify-center mt-4">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
            </div>
          )}

          {/* Error Message */}
          {errorMsg && (
            <div className="text-center text-red-600 mt-4">
              {errorMsg}
            </div>
          )}
        </div>

        {/* Product Cards */}
        <div className="grid lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 grid-cols-1 md:grid-cols-2 CardsArea mx-auto">
          {products.map((product, index) => (
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
          ))}
        </div>

        {/* Empty state */}
        {!isLoading && products.length === 0 && !errorMsg && (
          <div className="text-center text-gray-500 mt-6">
            هیچ محصولی پیدا نشد.
          </div>
        )}
      </div>
    </div>
  );
}
