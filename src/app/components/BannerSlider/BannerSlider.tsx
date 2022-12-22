/** @format */

import React from "react";
import "./BannerSlider.scss";
import Slider from "react-slick";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import { Link } from "react-router-dom";
import { Button, Box, Typography } from "@mui/material";

import { AppImages } from "../../../shared/images";

const {
  excel,
  cloud,
  e,
  azure,
  office,
  v,
  word,
  windows,
  microsoft,
  roundAward,
  roundAzure,
  slidebg1,
} = AppImages;

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
              <div
                className="d-flex justify-content-center align-items-center"
                style={{ flexDirection: "column" }}
              >
                <Box className="d-flex justify-content-center align-items-center gap-10 slider-content">
                  <Typography variant={"h1"}>Cloud Service Portal</Typography>
                  <Typography variant={"h3"}>
                    we make licensing simple
                  </Typography>
                </Box>

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
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerSlider;
