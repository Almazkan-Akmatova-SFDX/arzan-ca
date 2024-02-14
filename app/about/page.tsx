import { Metadata } from "next";
import NewNavBar from "../components/NavBar";
import BannerText from "../components/sections/BannerText";
import Footer from "../components/sections/Footer";
import FromOwner from "../sections/FromOwner";
import Gallery from "../sections/Gallery";
import AboutUsAbout from "./sections/AboutUsAbout";
import { Box } from "@chakra-ui/react";
export const metadata: Metadata = {
  title: "About Arzan Cafe",
  description:
    "Welcome to Arzan Cafe. Here, we can teach you about the history of this beautiful place. You can find out everything about it!",
};
const About = () => {
  return (
    <>
      <NewNavBar cP="About" />
      <BannerText title="ABOUT US" image="./assets/AboutPage.webp" />
      <AboutUsAbout />
      <FromOwner />
      <Box py="30px">
        <Gallery />
      </Box>
      <Footer cP="About" />
    </>
  );
};

export default About;
