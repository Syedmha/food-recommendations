import React, { useState } from "react";
import "./styles.css";

const foodDB = {
  Indian: [
    { name: "Paneer Butter Masala with Naan", rating: "4/5" },
    { name: "Hyderabadi Biryani", rating: "5/5" },
    { name: "Pav Bhaji", rating: "4.5/5" }
  ],

  Italian: [
    { name: "Pizza", rating: "5/5" },
    {
      name: "Pasta Aglio e Olio",
      rating: "4.5/5"
    },
    {
      name: "Alfredo Pasta",
      rating: "4/5"
    }
  ],
  Korean: [
    {
      name: "Korean Fried Chicken ",
      rating: "5/5"
    },
    {
      name: "Tteok-bokki",
      rating: "5/5"
    },
    {
      name: "Ramyeon ",
      rating: "4/5"
    }
  ]
};

export default function App() {
  const [selectedDish, setDish] = useState("Indian");
  function dishClickHandler(dish) {
    setDish(dish);
  }
  return (
    <div className="App">
      <h1> 🍕 My Food Recommendations </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        These are my recommendations of food from various cusines.{" "}
      </p>

      <div>
        {Object.keys(foodDB).map((dish) => (
          <button className="Btn" onClick={() => dishClickHandler(dish)}>
            {dish}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {foodDB[selectedDish].map((dish) => (
            <li className="dish" key={dish.name}>
              {" "}
              <div style={{ fontSize: "larger" }}> {dish.name} </div>
              <div style={{ fontSize: "smaller" }}> {dish.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
