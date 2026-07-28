import { useNavigate } from "react-router-dom";

const PersonDetails = ({ id, Name, Age, img }) => {
  const navigate = useNavigate();

  return (
    <div
      className="person"
      onClick={() => navigate(`/person/${id}`)}
      style={{ cursor: "pointer" }}
    >
      <img src={img} alt={Name} className="person-img" />

      <div className="person-info">
        <h4>{Name}</h4>
        <p>{Age} Years</p>
      </div>
    </div>
  );
};

export default PersonDetails;
