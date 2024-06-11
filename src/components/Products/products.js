import React from "react";
import product from "../../assets/Products/products.png";
import { useState } from "react";

const ProductsCat = () => {
  const [activeProductCategory, setActiveProductCategory] = useState(0);

  const handleActiveProductCategory = (index) => {
    setActiveProductCategory(index);
  };

  return (
    <section>
      <div className="products-container container">
        <div className="products-title">
          <h1>Available for You!!!</h1>
        </div>

        <div className="row categorizd__products__container">
          <div className="column  product__categories">
            <button
              onClick={() => handleActiveProductCategory(1)}
              className={`tag__1 ${
                activeProductCategory === 1 ? "active__product" : ""
              }`}
            >
              Best Sellers
            </button>
            <button
              onClick={() => handleActiveProductCategory(2)}
              className={`tag__1 ${
                activeProductCategory === 2 ? "active__product" : ""
              }`}
            >
              Fresh Produce
            </button>
            <button
              onClick={() => handleActiveProductCategory(3)}
              className={`tag__1 ${
                activeProductCategory === 3 ? "active__product" : ""
              }`}
            >
              Herbal Drinks
            </button>
            <button 
            onClick={() => handleActiveProductCategory(4)}
            className={`tag__1 ${activeProductCategory === 4 ? 'active__product' : ''}`}>Commodities</button>
            <button 
            onClick={() => handleActiveProductCategory(5)}
            className=
            {`tag__1 ${activeProductCategory ===5 ? 'active__product': ''}`}
            
            >Value Additions</button>
          </div>
          <div className="column categorized__products">
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
                    Lorem ipsum sit amet Lorem ipsum sit amet Lore ipsum sit
                    amet
                  </p>
                </div>
              </div>
              <div>
                <div className="product">
                  <img src={product} alt="product" />
                  <h3>Product 1</h3>
                  <p className="paragraph">
                    Lorem ipsum sit amet Lorem ipsum sit amet Lore ipsum sit
                    amet
                  </p>
                </div>
              </div>
              <div>
                <div className="product">
                  <img src={product} alt="product" />
                  <h3>Product 1</h3>
                  <p className="paragraph">
                    Lorem ipsum sit amet Lorem ipsum sit amet Lore ipsum sit
                    amet
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
                    Lorem ipsum sit amet Lorem ipsum sit amet Lore ipsum sit
                    amet
                  </p>
                </div>
              </div>
              <div>
                <div className="product">
                  <img src={product} alt="product" />
                  <h3>Product 1</h3>
                  <p className="paragraph">
                    Lorem ipsum sit amet Lorem ipsum sit amet Lore ipsum sit
                    amet
                  </p>
                </div>
              </div>
              <div>
                <div className="product">
                  <img src={product} alt="product" />
                  <h3>Product 1</h3>
                  <p className="paragraph">
                    Lorem ipsum sit amet Lorem ipsum sit amet Lore ipsum sit
                    amet
                  </p>
                </div>
              </div>
              <div>
                <div className="product">
                  <img src={product} alt="product" />
                  <h3>Product 1</h3>
                  <p className="paragraph">
                    Lorem ipsum sit amet Lorem ipsum sit amet Lore ipsum sit
                    amet
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsCat;
