import { Metadata } from "next";
import NewNavBar from "../components/NavBar";
import BannerText from "../components/sections/BannerText";
import Footer from "../components/sections/Footer";
import Posts from "../components/sections/Posts";
import Subscribe from "../components/sections/Subscribe";
export const metadata: Metadata = {
  title: "Blog of Arzan Cafe",
  description:
    "Welcome to Arzan Cafe. On this page, you can find restaurant-related blogs and posts. We offer good service. Don't worry, our posts are always up to date!",
};
const page = () => {
  return (
    <>
      <NewNavBar cP="blog" />
      <BannerText title="RECENT NEWS" image="./assets/BlogBanner.webp" />
      <Posts
        postName={
          "ARZAN KYRGYZ RESTAURANT’S OUTREACH AND IMPACT IN CHICAGO IL."
        }
        postCategory={"EVENTS"}
        postImage={"/assets/post-1.webp"}
        postDescription={
          "One of ARZANS &apos s core values is to form and maintain close relationships with our customers and local community. In CHICAGO IL, ARZAN serves as a bridge to connect America with KYRGYZ culture."
        }
      />
      <Subscribe />
      <Footer cP="blog" />
    </>
  );
};

export default page;
