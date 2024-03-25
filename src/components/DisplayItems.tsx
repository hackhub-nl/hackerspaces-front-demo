import React from "react";
import { HackerspaceEventsWrapper } from "../styles/Styles.modules";
import axios from "axios";

const DisplayItems = () => {
  //! Types for API data
  interface Hackerspace {
    id: number;
    name: string;
    city: string;
  }

  interface Event {
    id: number;
    name: string;
    description: string;
    hackerspaceId: number;
  }

  return <HackerspaceEventsWrapper></HackerspaceEventsWrapper>;
};

export default DisplayItems;
