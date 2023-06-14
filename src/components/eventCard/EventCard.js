import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";

const EventCard = ({ title, id, imageUrl }) => {
  return (
    <>
      <Link href={`/event/${id}`}>
        <div className={styles.card}>
          <h1>{title}</h1>
          <img className={styles.image} src={imageUrl} />
        </div>
      </Link>
    </>
  );
};

export default EventCard;
