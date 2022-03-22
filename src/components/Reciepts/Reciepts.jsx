import React, { useState } from "react";
import Ingredients from "../Ingredients/Ingredients";

const Reciepts = () => {
  const [meal, setMeal] = useState();
  return (
    <div>
      <input
        type="radio"
        name="myfood"
        value="hachapuri"
        onChange={(e) => setMeal(e.target.value)}
      />
      <label>Хачапури</label>
      <input
        type="radio"
        name="myfood"
        value="pizza"
        onChange={(e) => setMeal(e.target.value)}
      />
      <label>Пицца</label>
      <input
        type="radio"
        name="myfood"
        value="plov"
        onChange={(e) => setMeal(e.target.value)}
      />
      <label>Плов</label>
      <Ingredients meal={meal} />
    </div>
  );
};

export default Reciepts;
