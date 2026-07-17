import { createRoot } from "react-dom/client";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://www.course-api.com/react-tours-project";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(url);
      const data = await response.json();

      setTours(data);
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (tours.length === 0) {
    return (
      <div className="no-tours">
        <h2>No Tours Left</h2>

        <button className="btn btn-primary refresh-btn" onClick={fetchTours}>
          Refresh
        </button>
      </div>
    );
  }

  return <Tours tours={tours} removeTour={removeTour} />;
}

createRoot(document.getElementById("root")).render(<App />);
