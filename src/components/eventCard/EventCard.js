import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";

const EventCard = ({ title, id, imageUrl, date }) => {
  return (
    <>
      <Link className={styles.link} href={`/event/${id}`}>
        <div className={styles.card}>
          <h1 className={styles.title}>{title}</h1>
          <img className={styles.image} src={imageUrl} />
          <div className={styles.date}>{date}</div>
        </div>
      </Link>
    </>
  );
};

export default EventCard;
