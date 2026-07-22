import React, { useEffect, useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import "./style.css";

const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const nextPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex + 1;
      return newIndex >= people.length ? 0 : newIndex;
    });
  };

  const prevPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex - 1;
      return newIndex < 0 ? people.length - 1 : newIndex;
    });
  };
 useEffect(()=>{
  people.forEach((person) => {
    const img = new Image();
    img.src = person.image;
  });
 },[]);

  return (
    <main>
      <article className="container">
        <div className="img-container">
          <img src={image} alt={name} className="img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>

        <div className="content">
          <h4>{name}</h4>
          <p className="job">{job}</p>
          <p className="description">{text}</p>
          <div className="btn-Container">
            <button className="prev-btn" onClick={prevPerson}>
              <FaChevronLeft className="btn-icon" />
            </button>
            <button className="next-btn" onClick={nextPerson}>
              <FaChevronRight className="btn-icon" />
            </button>
          </div>
        </div>
      </article>
    </main>
  );
};

export default App;
