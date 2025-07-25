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
      <BannerText title="Our Menu" image="/assets/MenuBanner.webp" />
      <Menu
        href={
          "https://order.toasttab.com/online/arzan-cafe"
        }
        btnLabel={"Order Now"}
        foodTypeName="APPETIZERS"
        foodItems={MenuData.APPETIZERS}
        badgeType="TEXT"
      />
      <Menu
        href={
          "https://order.toasttab.com/online/arzan-cafe"
        }
        btnLabel={"Order Now"}
        foodTypeName="SALADS"
        foodItems={MenuData.SALADS}
        badgeType="TEXT"
      />
      <Menu
        href={
          "https://order.toasttab.com/online/arzan-cafe"
        }
        btnLabel={"Order Now"}
        foodTypeName="SOUPS"
        foodItems={MenuData.SOUPS}
      />
      <Menu
        href={
          "https://order.toasttab.com/online/arzan-cafe"
        }
        btnLabel={"Order Now"}
        foodTypeName="MAINS"
        foodItems={MenuData.MAINDISHES}
      />
      <Menu
        href={
          "https://order.toasttab.com/online/arzan-cafe"
        }
        btnLabel={"Order Now"}
        foodTypeName="KEBABS"
        foodItems={MenuData.KEBABS}
      />
      <Menu
        href={
          "https://order.toasttab.com/online/arzan-cafe"
        }
        btnLabel={"Order Now"}
        foodTypeName="ARZAN GRILL"
        foodItems={MenuData["ARZAN GRILL"]}
      />
      <Footer cP="Menu" />{" "}
    </>
  );
};

export default page;
