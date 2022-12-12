/** @format */

import React from "react";
import "./BannerSlider.scss";
import Slider from "react-slick";
import slidebg1 from "../../../AppImages/banner/slide-bg-2.png";
import excel from "../../../AppImages/banner/excel.png";
import cloud from "../../../AppImages/banner/cloud.png";
import e from "../../../AppImages/banner/e.png";
import azure from "../../../AppImages/banner/azure.png";
import office from "../../../AppImages/banner/office.png";
import v from "../../../AppImages/banner/v.png";
import word from "../../../AppImages/banner/word.png";
import microsoft from "../../../AppImages/banner/round-microsoft.png";
import roundAward from "../../../AppImages/banner/round-award.png";
import roundAzure from "../../../AppImages/banner/round-azure.png";
import windows from "../../../AppImages/banner/windows.png";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import { Link } from "react-router-dom";
import { Button, Box, Container } from "@mui/material";
const icons = [excel, cloud, e, azure, office, v, word, windows];
const roundedIcon = [microsoft, roundAward, roundAzure];

const BannerSlider = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    draggable: false,
    initialSlide: 0,
    swipeToSlide: false,
    nextArrow: <ChevronRightIcon />,
    prevArrow: <ChevronLeftIcon />,
  };

  return (
    <div>
      <Slider className="slider" {...settings}>
        {[1, 2, 3].map((s) => (
          <div>
            <div
              className="slider-slide"
              style={{ backgroundImage: `url(${slidebg1})` }}
            >

                <Box className="d-flex justify-content-center gap-15 mt-40 slider-btns">
                  <Button
                    className="btn-rounded btn-large slider-btn already-customer"
                    variant="contained"
                  >
                    <ListItem component={Link} to={"/"}>
                      Already A Customer?
                    </ListItem>
                  </Button>
                  <Button
                    color="secondary"
                    className="btn-rounded btn-large slider-btn already-customer"
                    variant="contained"
                  >
                    <ListItem component={Link} to={"/"}>
                      Become A Customer
                    </ListItem>
                  </Button>
                </Box>

                <div className="slider-rounded d-flex justify-content-center gap-25 mt-40">
                  {roundedIcon.map((icon, index) => (
                    <Box className="rounded-box" key={index}>
                      <img src={icon} alt="icon" />
                    </Box>
                  ))}
                </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerSlider;
