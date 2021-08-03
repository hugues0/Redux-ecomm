import React from "react";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  // const {id,title} = products[0]
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div
        className="four column wide"
        key={id}
        style={{ width: "30%", display: "flex", flex: "1" }}
      >
        <div className="ui link cards">
          <div className="card">
            <div className="image">
              <img src={image} alt={title} style={{ height: "20rem" }} />
            </div>
            <div className="content">
              <div className="header">{title}</div>
              <div className="meta price">${price}</div>
              <div className="meta">{category}</div>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;
