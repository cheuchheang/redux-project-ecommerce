import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((item) => {
    return (
      <div className="four column wide" style={{ width: "25%" }} key={item.id}>
        <Link to={`product/${item.id}`}>
          <div className="ui link cards" style={{ height: "500px" }}>
            <div className="card">
              <div className="image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="content">
                <div className="header">{item.title}</div>
                <div className="meta price">${item.price}</div>
                <div className="meta">{item.category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  // const { id, title } = products[0];
  return <>{renderList}</>;
};

export default ProductComponent;
