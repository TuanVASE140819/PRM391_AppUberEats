import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Divider } from "react-native-elements";
import About from "../components/restaurantDetail/About";
import MenuItems from "../components/restaurantDetail/MenuItems";
import ViewCart from "../components/restaurantDetail/ViewCart";

const foods = [
  {
    title: "Lasagna",
    description: "With butter lettuce, tomato and sauce bechamel",
    price: "$13.50",
    image:
      "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
  },
  {
    title: "Tandoori Chicken",
    description:
      "Amazing Indian dish with tenderloin chicken off the sizzles 🔥",
    price: "$19.20",
    image: "https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg",
  },
  {
    title: "Chilaquiles",
    description:
      "Chilaquiles with cheese and sauce. A delicious mexican dish 🇲🇽",
    price: "$14.50",
    image:
      "https://i2.wp.com/chilipeppermadness.com/wp-content/uploads/2020/11/Chilaquales-Recipe-Chilaquiles-Rojos-1.jpg",
  },
  {
    title: "Chicken Caesar Salad",
    description:
      "One can never go wrong with a chicken caesar salad. Healthy option with greens and proteins!",
    price: "$21.50",
    image:
      "https://images.themodernproper.com/billowy-turkey/production/posts/2019/Easy-italian-salad-recipe-10.jpg?w=1200&h=1200&q=82&fm=jpg&fit=crop&fp-x=0.5&fp-y=0.5&dm=1614096227&s=c0f63a30cef3334d97f9ecad14be51da",
  },
  {
    title: "Blood Soup",
    description:
      "Blood soup is any soup that uses blood as a principal ingredient🔥",
    price: "$12",
    image: "https://afamilycdn.com/150157425591193600/2020/5/31/han-phuong-1590890519975394782562.jpg",
  },
  {
    title: "Spaghetti",
    description:
      "It is a staple food of traditional Italian cuisine.🔥🔥🔥",
    price: "$11",
    image: "https://massageishealthy.com/wp-content/uploads/2018/12/cach-nau-lam-mi-y-spaghetti-bang-tieng-anh-1.jpg",
  },
  {
    title: "Capuchino",
    description:
      "It is a staple food of traditional Italian cuisine.🔥🔥🔥",
    price: "$10",
    image: "https://www.ourhomelove.com/wp-content/uploads/2017/07/shutterstock_141730990-min.jpg?x34745",
  },
];

export default function RestaurantDetail({ route, navigation }) {
  return (
    <>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItems restaurantName={route.params.name} foods={foods} />
      <ViewCart navigation={navigation} />
    </>
  );
}
