import Slider from "react-slick";
import "./BannerCarousel.scss";

import { banners } from "../../data/dataBanners";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const BannerCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="banner-carousel">
      <Slider {...settings}>
        {banners.map((banner) => (
          <div key={banner.id} className="banner-carousel__slide">
            <img
              src={banner.image}
              alt={banner.alt}
              srcSet={banner.srcSet}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1920px"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerCarousel;
