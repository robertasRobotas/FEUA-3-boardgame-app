import React, { useState, useEffect } from "react";
import axios from "axios";
import EventCard from "../components/eventCard/EventCard";
import styles from "./styles.module.css";

const MainPage = () => {
  const [boardgames, setBoardgames] = useState([]);

  const fetchAllEvents = async () => {
    const response = await axios.get("http://localhost:8080/events");
    const { data } = response;
    console.log(data.event);
    setBoardgames(data.event);
  };

  useEffect(() => {
    fetchAllEvents();
  }, []);

  return (
    <div>
      <div className={styles.cardsWrapper}>
        {boardgames.map((boardgame) => (
          <div key={boardgame._id}>
            <EventCard
              id={boardgame._id}
              title={boardgame.title}
              imageUrl={boardgame.boardgameImage}
              date={boardgame.date}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
