import { useParams } from "react-router";
import { extractResId, CreateUrl } from "../utils/helper";
import { useEffect, useState } from "react";
import MenuContainer from "./MenuContainer";
import Restaurantcard from "./Restaurantcard";
import Category from "./Category"; 

const Menu = () => {
  const Params = useParams();
  console.log("useParams", Params);

  const [normalMenu, setNormalMenu] = useState([]);
  const [nestedMenu, setNestedMenu] = useState([]);
  const [resInfo, setResInfo] = useState(null);

  const getMenuData = async () => {
    try {
      const API_URL = CreateUrl(extractResId(Params.title));
      console.log("APIURL", API_URL);
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error("Something Went Wrong");
      }
      const json = await response.json();
      console.log(
        "json",
        json?.data?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards
      );

      setResInfo(json?.data?.cards[2]?.card?.card?.info);

      const collection =
        json?.data?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards || [];

      const categoryList = collection.filter(
        (items) =>
          items?.card?.card["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
      const nestedcategoryList = collection.filter(
        (items) =>
          items?.card?.card["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
      );

      setNormalMenu(categoryList);
      setNestedMenu(nestedcategoryList);

      console.log("categoryList", categoryList);
      console.log("nestedcategoryList", nestedcategoryList);
    } catch (err) {
      console.log("error", err);
    }
  };

  useEffect(() => {
    getMenuData();
  }, []);

  if (!resInfo) {
    return <h1>loading....</h1>;
  }

  return (
    <div>
      {normalMenu && (
        <>
          <MenuContainer {...resInfo} />
          {normalMenu.map((menuItem, index) => (
            <Category
              key={index}
              title={menuItem?.card?.card?.title}
              collection={menuItem?.card?.card?.itemCards}
            />

          ))}
        </>
      )}
    </div>
  );
};

export default Menu;
