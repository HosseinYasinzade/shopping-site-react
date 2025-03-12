import img from "../../assets/images/banner.jpg";

interface Card {
  img_src: string;
  title: string;
  description: string;
  off: string;
}

const cards: Card[] = [
  {
    img_src: img,
    title: "Nike Sports Shoes",
    description:
      "A lightweight and comfortable shoe for running and daily workouts.",
    off: "20%",
  },
  {
    img_src: img,
    title: "Classic Wristwatch",
    description: "A stylish and durable watch with a leather strap.",
    off: "15%",
  },
  {
    img_src: img,
    title: "Travel Backpack",
    description: "A spacious and durable backpack for long trips.",
    off: "10%",
  },
];

export default cards;
