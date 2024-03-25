import React, { useEffect, useState } from "react";
import { HackerspaceEventsWrapper } from "../styles/Styles.modules";
import axios from "axios";

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

const DisplayItems = () => {
  const [showItems, setShowItems] = useState<Hackerspace[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  // Pagination from the API
  useEffect(() => {
    const fetchHackerspaces = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_HACKERSPACES}`,
          {
            params: {
              page: currentPage,
            },
          }
        );

        const { results, total_pages } = response.data;
        setShowItems(results.slice(0, 16));
        setTotalPages(total_pages);
        setTimeout(() => {
          setLoading(true);
        }, 1000);
      } catch (error) {
        console.error("Error fetching hackerspaces:", error);
      }
    };
    fetchHackerspaces();
  }, [currentPage]);

  return <HackerspaceEventsWrapper></HackerspaceEventsWrapper>;
};

export default DisplayItems;
