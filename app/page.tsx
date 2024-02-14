import Hero from "./sections/Hero";
import OurStory from "./sections/OurStory";
import dynamic from "next/dynamic";
const MembershipPlans = dynamic(() => import("./sections/Membership"));
const Menu = dynamic(() => import("./components/sections/Menu"));
const Catering = dynamic(() => import("./sections//Catering"));
const Fresh = dynamic(() => import("./sections/Fresh"));
const MoreDishes = dynamic(() => import("./sections//MoreDishes"));
const BookTable = dynamic(() => import("./sections/BookTable"));
const FromOwner = dynamic(() => import("./sections/FromOwner"));
const Specials = dynamic(() => import("./sections/Specials"));
const Gallery = dynamic(() => import("./sections/Gallery"));
const Reviews = dynamic(() => import("./sections/Reviews"));
const FindUs = dynamic(() => import("./sections/FindUs"));
const Footer = dynamic(() => import("./components/sections/Footer"));

import NewNavBar from "./components/NavBar";
export default function Home() {
  const menuItems = {
    foodType: "OUR SPECIALTIES",
    items: [
      {
        id: 1,
        name: "OROMO",
        description:
          "Traditional-steamed pie stuffed with minced meat, potatoes&onions",
          image: "/menuitems/Oromo.webp",
        categories: [""],
        price: 13,
      },
      {
        id: 2,
        name: "GAN-FAN",
        description: "Sauteed beef, peppers, onions served over rice",
        image: "/menuitems/Gan-fan.webp",
        categories: [""],
        price: 14,
      },
      {
        id: 3,
        name: "GYURO LAGMAN",
        description:
          "Stir fried beef & vegetables served w hand-pulled noodles",
        image: "/menuitems/Lagman.jpg",
        categories: [""],
        price: 20,
      },
    ],
  };
  return (
    <>
      <NewNavBar cP="home" />
      <Hero />
      <OurStory />
      {/* <MembershipPlans /> */}
      <Menu
        foodItems={menuItems.items}
        foodTypeName={menuItems.foodType}
        href={"/menu"}
        btnLabel={"View Full Menu"}
      />
      <Catering />
      <Fresh />
      <MoreDishes />
      <BookTable />
      <FromOwner />
      <Specials />
      <Gallery />
      <Reviews />
      <FindUs />
      <Footer cP="home" />
    </>
  );
}
