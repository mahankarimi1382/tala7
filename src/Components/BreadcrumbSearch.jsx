import { Search } from "lucide-react";

export default function BreadcrumbSearch() {
  return (
    <div className=" mt-6 md:mt-1 md:p-4 space-y-4 ms-10 sm:ms-14 ">
      {/* Breadcrumb */}
      <nav className="text-gray-500 text-sm">
        <a href="#" className="hover:text-black">خانه</a>
        <span className="mx-1">/</span>
        <a href="#" className="text-black font-bold">دسته بندی نشده</a>
      </nav>

      {/* Search Bar */}
      <div className="relative md:w-[60vw] w-[80vw] max-w-4xl ">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        <input
          type="text"
          placeholder="جستجوی محصولات"
          className="w-full border border-gray-300 rounded-md py-2 pl-10 pr-4 text-right placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
        />
      </div>
    </div>
  );
}
