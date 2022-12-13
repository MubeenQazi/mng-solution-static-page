import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BannerSlider from "../../components/BannerSlider/BannerSlider";
import cta1 from "../../../AppImages/cta1.png";
import cta2 from "../../../AppImages/cta2.png";
import ListItem from '@mui/material/ListItem';
import {Link} from "react-router-dom";
import "./Landing.scss";
import MessageApi from '../../api/messageApi';

import {
  Container,
  Grid,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Box,
} from "@mui/material";
import about from "../../../AppImages/about.png";




const defaultValues:any = {
  email: "",
  phone: "",
  subject: "",
  message: "",
  contact: "email",
};


const handleClick = () => {
  localStorage.setItem("cookies", JSON.stringify(true));
  const cookieAccept = localStorage.getItem("cookies");
  var element = document.getElementById(
    "cookieNotificationBar"
  ) as HTMLInputElement | null;

  if (element != null) {
    element.style.display = "none";
  }
};



const PublicLayout = () => {
  const [formValues, setFormValues] = React.useState(defaultValues);
  const [formSubmit, setFormSubmit] = React.useState(false);

  const handleInputChange = (e: any) => {
    const { name, value }: any = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    setFormSubmit(true);
  } 

  

  return (
  <div className="landing-page start-top">
      {
        formSubmit && <MessageApi formData={formValues}  />
      }
      <BannerSlider />
      
    <section className="about">
      <Container>
        <Grid container spacing={2} marginTop={10}>
          <Grid item xs={12} md={6}>
            <img src={about} alt="about" />
          </Grid>
          <Grid className="home-about-sec" item xs={12} md={6} marginTop={5}>
            <h2 className="primary-heading">About Us</h2>
            <p>
              Managed Solution is a full-service technology management company
              and elite Microsoft managed service provider. Select our managed
              services for businesses, to save time or get expertise to manage
              complex IT configuration for businesses of any size or anywhere.
              Choose cost-effective cloud solutions to move your infrastructure
              and applications to the cloud. Our goal is to make technology
              easier and more accessible to everyone. We work with the latest
              technologies so you can focus on running your business.
            </p>
          </Grid>
        </Grid>
      </Container>
    </section>
    <section className="contact-form">
      <Container>
        <h2 className="primary-heading">Send Us a Message</h2>

        <form onSubmit={handleSubmit}>
          <FormControl className="input-row">
            <TextField
              fullWidth
              type="email"
              name="email"
              label="Your email address"
              variant="outlined"
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl className="input-row">
            <TextField
              fullWidth
              type="tel"
              name="phone"
              label="Your phone number"
              variant="outlined"
                onChange={handleInputChange}
            />
          </FormControl>
          <FormControl className="input-row">
            <TextField
              fullWidth
              type="text"
              label="Subject"
              variant="outlined"
              name="subject"
                onChange={handleInputChange}
            />
          </FormControl>
          <FormControl className="input-row">
            <TextField fullWidth label="Message" multiline rows={5} onChange={handleInputChange} name="mesage"/>
          </FormControl>

          <div className="home-contact-option d-flex justify-content-between mt-30">
            <FormControl className="contact-radio-button">
              <FormLabel>How would you like us to contact you?</FormLabel>
              <RadioGroup row defaultValue="email" name="contact" onChange={handleInputChange}>
                <FormControlLabel
                  value="email"
                  control={<Radio />}
                  label="Email"
                />
                <FormControlLabel
                  value="phone"
                  control={<Radio />}
                  label="Phone"
                />
              </RadioGroup>
            </FormControl>
            <Button type="submit" className="btn-rounded btn-mid" variant="contained">
              Send Message
            </Button>
          </div>
        </form>
      </Container>
    </section>

    <section className="cta-section">
      <Container>
        <Grid container spacing={2} className="cta">
          <Grid className="cta-content" item xs={12} md={6} paddingTop={0}>
            <p>Call us at</p>
            <a href="tel:1-888-563-9132 ">1-888-563-9132 </a>
            <p>for a free consultation today!</p>
          </Grid>
          <Grid item xs={12} md={6} paddingTop={0}>
            <div className="d-flex justify-content-between cta-img">
              <img className="cta-img-1" src={cta1} alt="cta1" />
              <img className="cta-img-2" src={cta2} alt="cta2" />
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
    <section
      id="cookieNotificationBar"
      className="policy-section"
      style={{
        display: localStorage.getItem("cookies") ? "none" : "block",
      }}
    >
      <Container className="policy-section-container">
        <Box>
          <p>
            This website stores cookies on your computer. These cookies are used
            to collect information about how you interact with our website and
            allow us to remember you. We use this information in order to
            improve and customize your browsing experience and for analytics and
            metrics about our visitors both on this website and other media. To
            find out more about the cookies we use, see our{" "}
            <Button variant="text"><ListItem component={Link} to={ '/privacy-policy' }>Privacy Policy</ListItem></Button>
            .
          </p>
          <Box className="d-flex justify-content-end policy-btn">
            <Button
              className="btn-rounded btn-mid"
              variant="contained"
              onClick={handleClick}
            >
              Accept
            </Button>
          </Box>
        </Box>
      </Container>
    </section>
  </div>
)
};

export default PublicLayout;
