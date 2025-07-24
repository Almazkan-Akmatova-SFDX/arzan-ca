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
        name: "BOSO LAGMAN",
        description:
          "Hand-pulled noodles stir fried with beef & vegetables",
          image: "/menuitems/Boso-lagman.webp",
        categories: [""],
        price: 19.99,
      },
      {
        id: 2,
        name: "PLOV",
        description: "Central Asian rice with beef and carrots",
        image: "/menuitems/Plov.webp",
        categories: [""],
        price: 15.99,
      },
      {
        id: 3,
        name: "SHAWARMA",
        description:
          "Beef & lamb wrap with vegies and house-made sauce",
        image: "/menuitems/Beef-shawarma.webp",
        categories: [""],
        price: 10,
      },
    ],
  };
  return (
    <>
      <NewNavBar cP="home" />
      <Hero />
      {/*<OurStory />*/}
      {/* <MembershipPlans /> */}
      <Menu
        foodItems={menuItems.items}
        foodTypeName={menuItems.foodType}
        href={"/menu"}
        btnLabel={"View Full Menu"}
      />
      <Catering />
      <Fresh />
      {/*<MoreDishes />*/}
      <BookTable />
      <FromOwner />
      {/*<Specials />*/}
      <Gallery />
      <Reviews />
      <FindUs />
      <Footer cP="home" />
    </>
  );
}
