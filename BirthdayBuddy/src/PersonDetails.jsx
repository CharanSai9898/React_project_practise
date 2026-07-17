const PersonDetails = ({ img, Name, Age }) => {
  return (
    <div className="person">
      <img src={img} alt={Name} className="person-img" />

      <div className="person-info">
        <h4>{Name}</h4>
        <p>{Age} years</p>
      </div>
    </div>
  );
};

export default PersonDetails;
