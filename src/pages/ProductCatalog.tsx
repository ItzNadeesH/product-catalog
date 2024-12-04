import ProductCard from "../components/ProductCard";
import useProducts, { Product } from "../hooks/useProducts";
import { useSelector, useDispatch } from "react-redux";
import {
  setProducts,
  setSearchQuery,
  clearSearchQuery,
} from "../features/product/productSlice";
import { useEffect, useState } from "react";

const ProductCatalog = () => {
  const { data } = useProducts();
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState<string>("");
  const { productList } = useSelector((state: any) => state.products);

  useEffect(() => {
    if (data) dispatch(setProducts(data));
  }, [data]);

  const handleSearch = (e: any) => {
    e.preventDefault();

    dispatch(setSearchQuery(searchValue));
  };

  const handleClear = () => {
    dispatch(clearSearchQuery(data));
    setSearchValue("");
  };

  const darkModeHandler = () => {
    document.body.classList.toggle("dark");
  };

  return (
    <>
      <section className="max-w-screen-xl mx-auto">
        <div className="flex mb-10">
          <form onSubmit={handleSearch} className="w-md grow">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 outline-0"
                placeholder="Search Products"
                onChange={(e) => setSearchValue(e.target.value)}
                value={searchValue}
              />
              <button
                type="submit"
                className="text-white border border-black absolute end-[90px] bottom-2 bg-black hover:bg-[#262626] focus:outline-none font-medium rounded-lg text-sm px-4 py-2"
              >
                Search
              </button>
              <button
                type="button"
                onClick={handleClear}
                className="text-gray-500 border border-gray-500 box-border absolute end-2.5 bottom-2 bg-white focus:outline-none font-medium rounded-lg text-sm px-4 py-2"
              >
                Clear
              </button>
            </div>
          </form>
          <label className="inline-flex items-center cursor-pointer ml-5">
            <input
              onClick={darkModeHandler}
              type="checkbox"
              value=""
              className="sr-only peer"
            />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full black peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-black"></div>
            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              Dark Mode
            </span>
          </label>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {productList &&
            productList.map((item: Product) => (
              <ProductCard key={item.id} product={item} />
            ))}
        </div>
      </section>
    </>
  );
};

export default ProductCatalog;
