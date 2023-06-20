import React, { useState, useEffect } from "react";
import axios from "axios";
import EventCard from "../components/eventCard/EventCard";
import styles from "./styles.module.css";
import Navbar from "../components/navbar/Navbar";
// import Spinner from "../components/spinner/Spinner";

const MainPage = ({ events }) => {
  const [boardgames, setBoardgames] = useState(events);

  return (
    <div>
      <Navbar />
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

        {/* {!boardgames.length && <Spinner />} */}
      </div>
    </div>
  );
};

export default MainPage;

export async function getServerSideProps(ctx) {
  console.log(ctx.query.id);
  try {
    const response = await axios.get(
      "https://boardgame-app.onrender.com/events"
    );
    const { data } = response;

    return { props: { events: data.event } };
  } catch (err) {
    console.log(err);
  }
}