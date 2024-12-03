import ProductCard from "../components/ProductCard";
import useProducts from "../hooks/useProducts";

const ProductCatalog = () => {
  const { data, isLoading, error } = useProducts();

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {data && data.map((item) => <ProductCard key={item.id} product={item} />)}
    </div>
  );
};

export default ProductCatalog;
