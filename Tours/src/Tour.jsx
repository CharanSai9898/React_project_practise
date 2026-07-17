import React, { useState } from "react";
import "./Loading.css";

const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="single-tour">
      <div className="img-container">
        <img src={image} alt={name} className="tour-img" />

        <span className="tour-price">${price}</span>
      </div>

      <div className="tour-content">
        <h3 className="tour-title">{name}</h3>

        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}

          <button className="info" onClick={() => setReadMore(!readMore)}>
            {readMore ? " Show Less" : " Read More"}
          </button>
        </p>

        <button className="btn delete-btn" onClick={() => removeTour(id)}>
          Not Interested
        </button>
      </div>
    </article>
  );
};

export default Tour;
