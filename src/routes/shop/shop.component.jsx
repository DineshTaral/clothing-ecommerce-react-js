import { ProductContext } from "../../contexts/products.context";
import { useContext } from "react";
import ProductCard from "../../components/product-card/product-card.component";
import "./shop.styles.scss";
const Shop = () => {
  const { products } = useContext(ProductContext);
  return (
    <div className="product-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product}></ProductCard>
      ))}
    </div>
  );
};

export default Shop;
