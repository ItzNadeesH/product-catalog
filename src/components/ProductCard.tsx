import cartIcon from "../assets/cart-icon.png";
import { Product } from "../hooks/useProducts";
import currencyFormatter from "../utils/CurrencyFormatter";
import truncateString from "../utils/TruncateString";
import Rating from "./Rating";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <>
      <div className="relative p-5 bg-white shadow-[0_0_30px_10px_rgba(0,0,0,0.3)] rounded-md dark:bg-gray-900 dark:text-white">
        <button className="absolute top-8 right-8">
          <img className="w-[24px] " src={cartIcon} alt="cart-icon" />
        </button>
        <div className="w-full bg-white rounded-lg overflow-hidden">
          <img
            className="mx-auto h-[300px]"
            src={product.image}
            alt="product"
          />
        </div>

        <h4 className="mt-4">{truncateString(product.title, 25)}</h4>

        <p className="text-sm font-medium ">
          {currencyFormatter("USD").format(product.price)}
        </p>

        <div className="flex flex-col justify-between grow">
          <div className="my-2">
            <Rating count={product.rating.count} rate={product.rating.rate} />
          </div>
          <button className="w-full mb-auto bg-black hover:bg-[#262626] text-white font-meidum py-2 rounded-md transition-all dark:bg-white dark:text-black">
            Buy now
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
