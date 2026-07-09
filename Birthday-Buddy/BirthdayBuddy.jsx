import React from "react";
import Persondetails from "./Persondetails";
import { birthdaypersons } from "./Birthdaydata.js";
import "./BirthdayBuddy.css";
import { useState } from "react";

const BirthdayBuddy = () => {
  const [click, setClick] = useState(birthdaypersons);

  const handleClick = () => {
    setClick([]);
  };
  return (
    <div className="birthday-container">
      <h4 className="main" id="main">
        {click.length} Birthdays Today
      </h4>
      {click.map((person) => (
        <Persondetails key={person.id} {...person} />
      ))}
      <button className="btn" onClick={handleClick}>
        Clear All
      </button>
    </div>
  );
};

export default BirthdayBuddy;
