import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function AutoPlay({ ComponentList, extraSetting }) {
    const settings = {
        ...extraSetting,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        fade: true,
        speed: 4000,
        autoplaySpeed: 500,
        cssEase: "linear",
        arrows: false,

    };
    return (
        <div className="">
            <Slider {...settings}>{ComponentList}</Slider>
        </div>
    );
}

export default AutoPlay;