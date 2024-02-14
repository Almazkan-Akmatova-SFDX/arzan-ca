import { Metadata } from "next";
import NewNavBar from "../components/NavBar";
import BannerText from "../components/sections/BannerText";
import Footer from "../components/sections/Footer";
import FindUs from "../sections/FindUs";
import ContactUsForm from "./ContactUsForm";
export const metadata: Metadata = {
  title: "Contact Arzan Cafe",
  description:
    "Welcome to Arzan Cafe. You can easily contact us through this page. We provide fast replies and care a lot about ensuring a good customer experience!",
};
const Contact = () => {
  return (
    <>
      <NewNavBar cP="contact" />
      <BannerText
        catering={true}
        title="contact"
        image="./assets/catering-bg.webp"
      />
      <ContactUsForm />
      <FindUs />
      <Footer cP="contact" />
    </>
  );
};

export default Contact;
