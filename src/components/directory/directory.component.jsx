import CategoryItem from "../category-item/component-item.component";
import "./directory.styles.scss";
const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((item) => (
        <CategoryItem key={item.id} category={item}></CategoryItem>
      ))}
    </div>
  );
};

export default Directory;
