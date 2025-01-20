
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "./ProductCarousel.scss";

import { fetchProducts } from "../../data/product";

import star_filed from "../../assets/svgs/star_filed.svg";
import star_not_filed from "../../assets/svgs/star_not_filed.svg";

const ProductCarousel = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const productsData = await fetchProducts();
      setProducts(productsData);
    };

    getProducts();
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
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 3000,
          dots: true,
        },
      },
    ],
  };

  const formatPrice = (price) => (price / 100).toFixed(2).replace(".", ",");

  return (
    <section className="product-carousel">
      <h1 className="product-carousel-title">Mais Vendidos</h1>

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
                  <img
                    key={index}
                    src={index < product.stars ? star_filed : star_not_filed}
                    alt={index < product.stars ? "Estrela preenchida" : "Estrela vazia"}
                    className="star"
                  />
                ))}
              </div>
              <div className="product-prices">
                <span className={`list-price ${product.listPrice ? "" : "not_visible"}`}>
                  de: R$ {formatPrice(product.listPrice)}
                </span>
                <span className="price">Por: R$ {formatPrice(product.price)}</span>
              </div>
              <span
                className={`installments ${product.installments.length === 0 ? "not_visible" : ""}`}
              >
                {product.installments.length > 0
                  ? `ou em ${product.installments[0].quantity}x de R$ ${formatPrice(
                      product.installments[0].value
                    )}`
                  : "-"}
              </span>

              <button className="buy-button">COMPRAR</button>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default ProductCarousel;
