import { Metadata } from "next";
import NewNavBar from "../components/NavBar";
import BannerText from "../components/sections/BannerText";
import Footer from "../components/sections/Footer";
import { MenuData } from "./MenuData";
import Menu from "../components/sections/Menu";
export const metadata: Metadata = {
  title: "Menu of Arzan Cafe",
  description:
    "Welcome to Arzan Cafe. Here, as you can see, our menu is 100% Halal and offers a variety of options.",
};
const page = () => {
  return (
    <>
      <NewNavBar cP="menu" />
      <BannerText title="Our Daily menu" image="./assets/MenuBanner.webp" />
      <Menu
        href={
          "https://slicelife.com/restaurants/il/chicago/60625/arzan-cafe/menu"
        }
        btnLabel={"Order Now"}
        foodTypeName="APPETIZERS"
        foodItems={MenuData.APPETIZERS}
        badgeType="TEXT"
      />
      <Menu
        href={
          "https://slicelife.com/restaurants/il/chicago/60625/arzan-cafe/menu"
        }
        btnLabel={"Order Now"}
        foodTypeName="SOUP"
        foodItems={MenuData.SOUPS}
      />
      <Menu
        href={
          "https://slicelife.com/restaurants/il/chicago/60625/arzan-cafe/menu"
        }
        btnLabel={"Order Now"}
        foodTypeName="ENTRÉE"
        foodItems={MenuData.MAINDISHES}
      />
      <Menu
        href={
          "https://slicelife.com/restaurants/il/chicago/60625/arzan-cafe/menu"
        }
        btnLabel={"Order Now"}
        foodTypeName="KEBAB"
        foodItems={MenuData.FASTGRILLEDBROILED}
      />
      <Footer cP="Menu" />{" "}
    </>
  );
};

export default page;
