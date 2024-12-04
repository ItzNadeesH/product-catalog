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

  return (
    <>
      <section className="max-w-screen-xl mx-auto">
        <form onSubmit={handleSearch} className="w-md mb-10 ">
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
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 outline-0  "
              placeholder="Search Products"
              onChange={(e) => setSearchValue(e.target.value)}
              value={searchValue}
            />
            <button
              type="submit"
              className="text-white border border-blue-700 absolute end-[90px] bottom-2 bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-lg text-sm px-4 py-2"
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
