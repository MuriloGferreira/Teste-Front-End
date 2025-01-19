import { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "./ProductCarousel.scss";

const ProductCarousel = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://corebiz-test-server.onrender.com/api/v1/products"
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Erro ao buscar os produtos:", error);
      }
    };

    fetchProducts();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  const formatPrice = (price) => (price / 100).toFixed(2).replace(".", ",");

  return (
    <section className="product-carousel">
      <h1 className="product-carousel-title">Mais vendidos</h1>

      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.productId} className="product-card">

            {product.listPrice && product.price < product.listPrice && (
              <div className="product-flag">OFF</div>
            )}
            <img
              src={product.imageUrl}
              alt={product.productName}
              className="product-image"
            />

            <div className="product-info">

              <h1 className="product-name">{product.productName}</h1>
              <div className="product-stars">
                {Array.from({ length: 5 }, (_, index) => (
                  <span
                    key={index}
                    className={`star ${index < product.stars ? "filled" : ""}`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <div className="product-prices">
                {product.listPrice && (
                  <span className="list-price">
                    De: R$ {formatPrice(product.listPrice)}
                  </span>
                )}
                <span className="price">Por: R$ {formatPrice(product.price)}</span>
              </div>
              {product.installments.length > 0 && (
                <span className="installments">
                  ou em {product.installments[0].quantity}x de R${" "}
                  {formatPrice(product.installments[0].value)}
                </span>
              )}
              <button className="buy-button">Comprar</button>
            </div>

          </div>
        ))}
      </Slider>
    </section>
  );
};

export default ProductCarousel;
