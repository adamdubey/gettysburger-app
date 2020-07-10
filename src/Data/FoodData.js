export function formatPrice(price) {
  return price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}

export const foodItems = [
  {
    img: "/img/burger.jpeg",
    name: "Gettysburger Original",
    section: "Burgers & Sandwiches",
    price: 3.5,
  },
  {
    img: "/img/double-burger.jpg",
    name: "Double Lincoln",
    section: "Burgers & Sandwiches",
    price: 5,
  },
  {
    img: "/img/gyro.jpeg",
    name: "Bull Run Sandwich",
    section: "Burgers & Sandwiches",
    price: 5.25,
  },
  {
    img: "/img/sandwich.jpeg",
    name: "Four Score",
    section: "Burgers & Sandwiches",
    price: 5.5,
  },
  {
    img: "/img/fries.jpeg",
    name: "Freedom Fries",
    section: "Sides",
    price: 2.5,
  },
  {
    img: "/img/onion-rings.jpg",
    name: "Union Rings",
    section: "Sides",
    price: 3.75,
  },
  {
    price: 1.75,
    img: "/img/soda.jpg",
    name: "Beverages",
    section: "Drinks",
    choices: ["Coke", "Sprite", "Root Beer", "Fanta", "Water"],
  },
];

export const foods = foodItems.reduce((res, food) => {
  if (!res[food.section]) {
    res[food.section] = [];
  }
  res[food.section].push(food);
  return res;
}, {});
