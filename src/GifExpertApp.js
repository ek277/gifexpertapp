import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import GiftGrid from "./components/GiftGrid";

function GifExpertApp() {
  const [categories, setCategories] = useState(["One Punch"]);

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      {/* <button onClick={handleApp}>Agregar</button> */}

      <ol>
        {categories.map((category) => (
          <GiftGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
}

export default GifExpertApp;
