import { useState } from "react";
import PersonDetails from "./PersonDetails";
import { birthdaypersons } from "./BirthdayBuddydata";
import "./BirthdayBuddy.css";

const BirthdayBuddy = () => {
  const [people, setPeople] = useState(birthdaypersons);

  const handleClick = () => {
    setPeople([]);
  };

  return (
    <div className="birthday-container">
      <h4>{people.length} Birthdays Today</h4>

      {people.map((person) => (
        <PersonDetails key={person.id} {...person} />
      ))}

      <button className="btn" onClick={handleClick}>
        Clear All
      </button>
    </div>
  );
};

export default BirthdayBuddy;
