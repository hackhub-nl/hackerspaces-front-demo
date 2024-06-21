import { useState } from "react";
import { FetchState, HackerspaceData } from "../types";
import axios from "axios";

export function useGetHackerspaces() {
  const [fetchState, setFetchState] = useState(FetchState.DEFAULT);
  const [hackerspaces, setHackerspaces] = useState<Array<HackerspaceData>>([]);
  const getHackerspaces = async () => {
    try {
      setFetchState(FetchState.LOADING);

      const res = await axios.get("http://localhost:7000/api/hackerspaces");
      const resData = res.data as Array<HackerspaceData>;

      setHackerspaces(resData);
      setFetchState(FetchState.SUCCESS);
    } catch (error) {
      setFetchState(FetchState.ERROR);
    }
  };

  return [hackerspaces, fetchState, getHackerspaces] as const;
}
