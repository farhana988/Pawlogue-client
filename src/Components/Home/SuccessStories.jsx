import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SuccessStoriesCard from "../card/SuccessStoriesCard";
import Heading from "../Reusable/Heading";
import Lottie from "lottie-react";
import quote from "../../assets/lottie/quote.json";
import { useLoaderData } from "react-router-dom";

const SuccessStories = () => {
  const { stories } = useLoaderData();

  const sliderSettings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 500,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="relative">
        <Heading title={" Success Stories of Little Paw Paw"} />
        {/*  Image */}
        <div className="hidden md:flex absolute w-14 lg:w-16 -top-5 md:left-5 lg:left-28">
          <Lottie animationData={quote}></Lottie>
        </div>
      </section>

      {/* React Slick Carousel */}
      <Slider {...sliderSettings}>
        {stories?.map((story, index) => (
          <div className="px-1 lg:px-3 " key={index}>
            <SuccessStoriesCard story={story} />
          </div>
        ))}
      </Slider>
    </>
  );
};

export default SuccessStories;
