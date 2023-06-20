import React, { useState } from "react";
import styles from "./styles.module.css";
import axios from "axios";
import { useRouter } from "next/router";
import Navbar from "@/components/navbar/Navbar";

const NewBoardgamePage = () => {
  const router = useRouter();

  const [boardgameName, setBoardgameName] = useState("");
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [requiredPlayers, setRequiredPlayers] = useState("");
  const [author, setAuthor] = useState("");

  const addNewBoardgame = async () => {
    const response = await axios.post(
      "https://boardgame-app.onrender.com/event",
      {
        boardgameName: boardgameName,
        title: title,
        address: address,
        date: date,
        time: time,
        boardgameImage: imageURL,
        author: author,
        requiredPlayers: requiredPlayers,
      }
    );

    console.log("response", response);
    router.push("/");
  };

  return (
    <div>
      <Navbar />
      <div className={styles.boardgameForm}>
        <input
          value={boardgameName}
          onChange={(event) => setBoardgameName(event.target.value)}
          placeholder="Boardgame name"
        />

        <input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Title"
        />

        <input
          value={address}
          onChange={(event) => setAddress(event.target.value)}
          placeholder="Address"
        />

        <input
          value={date}
          onChange={(event) => setDate(event.target.value)}
          placeholder="Date"
        />

        <input
          value={time}
          onChange={(event) => setTime(event.target.value)}
          placeholder="Time"
        />

        <input
          value={imageURL}
          onChange={(event) => setImageURL(event.target.value)}
          placeholder="Image URL"
        />

        <input
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
          placeholder="Author"
        />

        <input
          value={requiredPlayers}
          onChange={(event) => setRequiredPlayers(event.target.value)}
          placeholder="Required Players"
        />

        <button onClick={() => addNewBoardgame()}>Add Boardgame Event</button>
      </div>
    </div>
  );
};

export default NewBoardgamePage;
