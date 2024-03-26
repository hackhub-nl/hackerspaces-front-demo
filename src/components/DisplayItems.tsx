import React, { useEffect, useState } from "react";
import { HackerspaceEventsWrapper } from "../styles/Styles.modules";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import { isTemplateSpan } from "typescript";

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
  const [showItems, setShowItems] = useState<Item[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(`${apiEndpoint}`);
        const { data } = response.data;
        setShowItems(data);

        setTimeout(() => {
          setLoading(true);
        }, 1000);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };
    fetchItems();
  }, [apiEndpoint, eventsOn, hackerspacesOn]);

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
          </div>
          <div className="itemCard">
            {showItems.map((item) => {
              return (
                <>
                  <h2>{item.name}</h2>

                  <div>
                    <>
                      <div className="itemInfo">
                        {hackerspacesOn && (
                          <>
                            <p>{item.city}</p>
                          </>
                        )}
                        {eventsOn && (
                          <>
                            <p>{item.description}</p>
                          </>
                        )}
                      </div>
                    </>
                  </div>
                </>
              );
            })}
          </div>
        </>
      )}
    </HackerspaceEventsWrapper>
  );
};

export default DisplayItems;
