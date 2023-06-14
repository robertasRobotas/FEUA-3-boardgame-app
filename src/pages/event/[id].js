import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const Event = () => {
  const [boardgame, setBordgame] = useState();
  const router = useRouter();
  const fetchEvent = async () => {
    const response = await axios.post(
      `http://localhost:8080/event/${router.query.id}`,
      { userId: "1234567" }
    );

    const { data } = response;
    setBordgame(data.event);
    console.log("response", response);
  };

  useEffect(() => {
    router.query.id && fetchEvent();
  }, [router.query.id]);

  return <div>{boardgame && <div>{boardgame.title}</div>}</div>;
};

export default Event;
