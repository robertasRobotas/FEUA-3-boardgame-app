import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import styles from "./styles.module.css";
import Navbar from "../../components/navbar/Navbar";

const Event = () => {
  const [boardgame, setBordgame] = useState();
  const router = useRouter();
  const fetchEvent = async () => {
    const response = await axios.post(
      `https://boardgame-app.onrender.com/event/${router.query.id}`,
      { userId: "1234567" }
    );

    const { data } = response;
    setBordgame(data.event);
    console.log("response", response);
  };

  useEffect(() => {
    router.query.id && fetchEvent();
  }, [router.query.id]);

  return (
    <>
      <Navbar />
      <div className={styles.pageWrapper}>
        {boardgame && (
          <div className={styles.wrapper}>
            <h1>{boardgame.title}</h1>
            <img className={styles.image} src={boardgame.boardgameImage} />

            <div className={styles.contentWrapper}>
              <div className={styles.eventInfo}>
                <h3>{boardgame.date}</h3>
                <h3>{boardgame.time}</h3>
                <h3>{boardgame.address}</h3>
                <h3>{boardgame.boardgameName}</h3>
              </div>
              <div className={styles.playersInfo}>
                <h3>
                  <>
                    required players {boardgame.requiredPlayers} /{" "}
                    {boardgame.joinedPlayers.length}{" "}
                  </>
                </h3>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Event;
