import React from "react";
import "../styles/products.css";
import product from "../assets/Products/products.png";

const Products = () => {
  return (
    <section>
      <div className="products-container">
        <div className="">
          <div className="products-title">
            <h1>Available for You!!!</h1>
          </div>
          <div className="row">
            <div className="product">
              <img src={product} alt="product" />
              <h3>Product 1</h3>
              <p className="strikethrough">$1452 </p>
              <p>$1254</p>
              <button className="add-to-cart-btn">Add to Cart</button>
            </div>
            <div>
              <div className="product">
                <img src={product} alt="product" />
                <h3>Product 1</h3>
                <p className="strikethrough">$1452 </p>
                <p>$1254</p>
                <button className="add-to-cart-btn">Add to Cart</button>
              </div>
            </div>
            <div>
              <div className="product">
                <img src={product} alt="product" />
                <h3>Product 1</h3>
                <p className="strikethrough">$1452 </p>
                <p>$1254</p>
                <button className="add-to-cart-btn">Add to Cart</button>
              </div>
            </div>
            <div>
              <div className="product">
                <img src={product} alt="product" />
                <h3>Product 1</h3>
                <p className="strikethrough">$1452 </p>
                <p>$1254</p>
                <button className="add-to-cart-btn">Add to Cart</button>
              </div>
            </div>
          </div>
          <div className="row">
            <div>
              <div className="product">
                <img src={product} alt="product" />
                <h3>Product 1</h3>
                <p className="strikethrough">$1452 </p>
                <p>$1254</p>
                <button className="add-to-cart-btn">Add to Cart</button>
              </div>
            </div>
            <div>
              <div className="product">
                <img src={product} alt="product" />
                <h3>Product 1</h3>
                <p className="strikethrough">$1452 </p>
                <p>$1254</p>
                <button className="add-to-cart-btn">Add to Cart</button>
              </div>
            </div>
            <div>
              <div className="product">
                <img src={product} alt="product" />
                <h3>Product 1</h3>
                <p className="strikethrough">$1452 </p>
                <p>$1254</p>
                <button className="add-to-cart-btn">Add to Cart</button>
              </div>
            </div>
            <div>
              <div className="product">
                <img src={product} alt="product" />
                <h3>Product 1</h3>
                <p className="strikethrough">$1452 </p>
                <p>$1254</p>
                <button className="add-to-cart-btn">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
