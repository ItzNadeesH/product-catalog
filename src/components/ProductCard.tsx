import productImage from "../assets/product.jpg";
import cartIcon from "../assets/cart-icon.png";

const ProductCard = () => {
  return (
    <>
      <div className="relative p-5 shadow-[0_0_30px_10px_rgba(0,0,0,0.3)] rounded-md">
        <button className="absolute top-8 right-8">
          <img className="w-[24px]" src={cartIcon} alt="cart-icon" />
        </button>
        <div>
          <img className="mx-auto h-[300px]" src={productImage} alt="product" />
        </div>

        <div className="flex justify-between mt-5">
          <h4>Product Name</h4>
          <p>Rating</p>
        </div>
        <p className="text-sm font-medium">Price</p>
        <button className="w-full mt-4 bg-black hover:bg-[#262626] text-white font-meidum py-2 rounded-md transition-all">
          Buy now
        </button>
      </div>
    </>
  );
};

export default ProductCard;
