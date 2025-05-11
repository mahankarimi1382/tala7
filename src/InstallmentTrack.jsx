import { useState } from "react";
import { Search } from "lucide-react";
import PishnahadCards from "./PishnahadCards";

export default function InstallmentTrack() {
  const [maxPrice, setMaxPrice] = useState("");
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Format number with thousand separators
  const formatNumber = (num) => {
    if (!num) return "";
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  // Remove thousand separators and convert to number
  const unformatNumber = (str) => {
    if (!str) return 0;
    const cleanStr = str.replace(/,/g, "");
    const num = parseInt(cleanStr);
    console.log("Unformatting:", { original: str, cleaned: cleanStr, parsed: num });
    return isNaN(num) ? 0 : num;
  };

  const handlePriceChange = (e) => {
    const value = e.target.value.replace(/,/g, "");
    if (value === "" || /^\d+$/.test(value)) {
      const formatted = formatNumber(value);
      console.log("Price change:", { original: value, formatted });
      setMaxPrice(formatted);
    }
  };

  const handleSearch = async () => {
    if (!maxPrice.trim()) return;

    setIsLoading(true);
    setErrorMsg("");

    const numericPrice = unformatNumber(maxPrice);
    console.log("Original price input:", maxPrice);
    console.log("Converted numeric price:", numericPrice);

    const requestBody = {
      term: "",
      price_Start: 0,
      price_End: 80000000, // Set exact price limit
      benefit_Percent_Start: 0,
      benefit_Percent_End: 100,
      discount_Benefit_Percent_Start: 0,
      discount_Benefit_Percent_End: 100,
      isAdult: false,
      isBaby: false,
      isWoman: false,
      isMan: false,
      freeShipment: false,
      specialSale: false,
      product_Size: "",
      gold_Color: "",
      gold_Model: "",
      gold_Made: "",
      isInstallment: true
    };

    console.log("Sending search request with body:", requestBody);

    try {
      // Try a different endpoint for lower priced products
      const response = await fetch("http://tala7.com:44/api/DocStore/Get_Products_Show_InVitrin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("API Error Response:", errorText);
        throw new Error(`Network error during search: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      console.log("Raw API Response:", data);

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

      // Filter products based on lastPrice
      const filteredProducts = productsList.filter(product => {
        if (!product || typeof product.lastPrice !== 'number') {
          console.warn("Invalid product or missing lastPrice:", product);
          return false;
        }

        // Get the actual price to compare (use discounted price if available)
        const actualPrice = product.lastPriceWithDiscount || product.lastPrice;
        
        // Check if the price is LESS THAN the input price
        const isLessThan = actualPrice < numericPrice;
        
        console.log(`Price comparison for ${product.productName}:`, {
          actualPrice,
          maxPrice: numericPrice,
          isLessThan,
          comparison: `${actualPrice} < ${numericPrice}`,
          rawProduct: product
        });
        
        return isLessThan;
      });

      console.log("Number of products after filtering:", filteredProducts.length);
      console.log("Filtered products:", filteredProducts);

      const mappedProducts = filteredProducts.map(product => {
        console.log("Processing product:", product);
        return {
          productName: product.productName || "نامشخص",
          lastPrice: product.lastPrice || 0,
          lastPriceWithDiscount: product.lastPriceWithDiscount || 0,
          logoImage1: product.logoImage1 || "",
          logoImage2: product.logoImage2 || "",
          discount_Benefit_Percent: product.discount_Benefit_Percent || 0
        };
      });

      console.log("Mapped Products:", mappedProducts);
      setProducts(mappedProducts);

      if (mappedProducts.length === 0) {
        if (productsList.length === 0) {
          setErrorMsg("هیچ محصولی در سیستم موجود نیست.");
        } else {
          setErrorMsg(`هیچ محصولی با قیمت کمتر از ${formatNumber(numericPrice)} تومان یافت نشد.`);
        }
      }
    } catch (err) {
      console.error("Search error:", err);
      setErrorMsg(`خطا در جستجوی محصولات: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center">
        {/* Search Bar */}
        <div className="relative w-full max-w-2xl mb-8">
          <div className="flex gap-4 mb-4">
            <div className="w-full relative">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
                size={18}
                onClick={handleSearch}
              />
              <input
                type="text"
                inputMode="numeric"
                pattern="[0-9,]*"
                placeholder="حداکثر قیمت محصولات قسطی"
                className="w-full border border-gray-300 rounded-md py-2 pl-10 pr-4 text-right placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
                value={maxPrice}
                onChange={handlePriceChange}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSearch();
                }}
              />
            </div>
          </div>
        </div>

        {/* Loading Spinner */}
        {isLoading && (
          <div className="flex justify-center mb-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
          </div>
        )}

        {/* Error Message */}
        {errorMsg && (
          <div className="text-center text-red-600 mb-8">
            {errorMsg}
          </div>
        )}

        {/* Product Cards */}
        <div className="grid lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 grid-cols-1 md:grid-cols-2 gap-6 w-full">
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