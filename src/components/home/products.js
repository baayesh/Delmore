import React from "react";
import "../../styles/home.css";
import product from "../../assets/Products/products.png";

const Products = () => {
  return (
    <section>
      <div className="products-container container">
        <div className="">
          <div className="products-title">
            <h1>Available for You!!!</h1>
          </div>
          <div className="row">
            <div className="product column">
              <img src={product} alt="product" />
              <h3>Product 1</h3>
              <p className="paragraph">
                Lorem ipsum sit amet Lorem ipsum sit amet Lore ipsum sit amet
              </p>
            </div>
            <div>
              <div className="product">
                <img src={product} alt="product" />
                <h3>Product 1</h3>
                <p className="paragraph">
                  Lorem ipsum sit amet Lorem ipsum sit amet Lore ipsum sit amet
                </p>
              </div>
            </div>
            <div>
              <div className="product">
                <img src={product} alt="product" />
                <h3>Product 1</h3>
                <p className="paragraph">
                  Lorem ipsum sit amet Lorem ipsum sit amet Lore ipsum sit amet
                </p>
              </div>
            </div>
            <div>
              <div className="product">
                <img src={product} alt="product" />
                <h3>Product 1</h3>
                <p className="paragraph">
                  Lorem ipsum sit amet Lorem ipsum sit amet Lore ipsum sit amet
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div>
              <div className="product">
                <img src={product} alt="product" />
                <h3>Product 1</h3>
                <p className="paragraph">
                  Lorem ipsum sit amet Lorem ipsum sit amet Lore ipsum sit amet
                </p>
              </div>
            </div>
            <div>
              <div className="product">
                <img src={product} alt="product" />
                <h3>Product 1</h3>
                <p className="paragraph">
                  Lorem ipsum sit amet Lorem ipsum sit amet Lore ipsum sit amet
                </p>
              </div>
            </div>
            <div>
              <div className="product">
                <img src={product} alt="product" />
                <h3>Product 1</h3>
                <p className="paragraph">
                  Lorem ipsum sit amet Lorem ipsum sit amet Lore ipsum sit amet
                </p>
              </div>
            </div>
            <div>
              <div className="product">
                <img src={product} alt="product" />
                <h3>Product 1</h3>
                <p className="paragraph">
                  Lorem ipsum sit amet Lorem ipsum sit amet Lore ipsum sit amet
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
