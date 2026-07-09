import React from "react";
// import './BirthdayBuddy.css';

const Persondetails = ({ img, Name, Age }) => {
  return (
    <div className="person">
      <img src={img} alt={name} className="person-img" />

      <div className="person-info">
        <h4>{Name}</h4>
        <span>{Age}years</span>
      </div>
    </div>
  );
};

export default Persondetails;
