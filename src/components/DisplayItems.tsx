import React, { useEffect, useState } from "react";
import { HackerspaceEventsWrapper } from "../styles/Styles.modules";
import axios from "axios";
import { CircularProgress } from "@mui/material";

//! Types for API data
interface Item {
  id: number;
  name: string;

  // Hackerspace
  city: string;

  // Event
  description: string;
}

interface DataProps {
  apiEndpoint: string;
  itemHeading: string;
  hackerspacesOn: boolean;
  eventsOn: boolean;
}

const DisplayItems: React.FC<DataProps> = ({
  apiEndpoint,
  itemHeading,
  hackerspacesOn,
  eventsOn,
}) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(`${apiEndpoint}`);
        console.log(response.data);

        setTimeout(() => {
          setLoading(true);
        }, 1000);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };
    fetchItems();
  }, [apiEndpoint]);

  return (
    <HackerspaceEventsWrapper>
      {!loading ? (
        <div className="loadingOverlay">
          <CircularProgress size={50} color="warning" />
          <p>Loading . . .</p>
        </div>
      ) : (
        <>
          <div className="itemHeading">
            <h1>{itemHeading}</h1>
            <h1>{apiEndpoint}</h1>
          </div>
          <div>
            <>
              <div className="itemInfo">
                {hackerspacesOn && (
                  <>
                    <p>List of hackerspaces</p>
                  </>
                )}
                {eventsOn && (
                  <>
                    <p>List of events</p>
                  </>
                )}
              </div>
            </>
          </div>
        </>
      )}
    </HackerspaceEventsWrapper>
  );
};

export default DisplayItems;
