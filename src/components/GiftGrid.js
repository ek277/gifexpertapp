import React from "react";
import useFetchGifs from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

const GiftGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  // getGifs();

  return (
    <>
      <h3 className="animate__animated animate__zoomIn">{category}</h3>
      {loading && (
        <p className="animate__animated animate__zoomIn">Loading...</p>
      )}
      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem {...img} key={img.id} />
        ))}
      </div>
    </>
  );
};

export default GiftGrid;

// GiftGrid.propTypes = {
//   category: Array.prototype.map(),
// };
