import { useParams, useNavigate } from "react-router-dom";
import { birthdaypersons } from "../data/BirthdayBuddydata";
import "../Styles/PersonProfile.css";

const PersonProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const person = birthdaypersons.find((person) => person.id === Number(id));

  if (!person) {
    return <h2>Person Not Found</h2>;
  }

  return (
    <div className="profile-container">
      <div className="profile-card">
        <img src={person.img} alt={person.Name} className="profile-image" />

        <h1>{person.Name}</h1>

        <div className="profile-info">
          <div className="info-box">
            <h3>ID</h3>
            <p>{person.id}</p>
          </div>

          <div className="info-box">
            <h3>Age</h3>
            <p>{person.Age}</p>
          </div>
        </div>

        <button className="back-btn" onClick={() => navigate("/")}>
          ← Back
        </button>
      </div>
    </div>
  );
};

export default PersonProfile;
