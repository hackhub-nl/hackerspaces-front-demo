import { useGetHackerspaces } from "./lib/api-hooks";
import { FetchState } from "./types";
import "./App.css";

function App() {
  const [hackerspaces, fetchState, getHackerspaces] = useGetHackerspaces();

  return (
    <div className="container">
      <h1>hackhub-front-poc</h1>
      {fetchState === FetchState.DEFAULT && (
        <>
          <p>Get all hackerspaces:</p>
          <button onClick={getHackerspaces}>Get Hackerspaces</button>
        </>
      )}
      {fetchState == FetchState.LOADING && <p>Fetching hackerspaces...</p>}
      {fetchState == FetchState.ERROR && (
        <>
          <p>Error: Something went wrong, please try again</p>
          <button onClick={getHackerspaces}>Get Hackerspaces</button>
        </>
      )}
      {fetchState === FetchState.SUCCESS && (
        <>
          <p>List of Hackerspaces in the Netherlands:</p>
          <ul className="hackerspaces-list">
            {hackerspaces.map((hackerspace, index = 0) => (
              <li key={index + 1} className="hackerspace">
                <h3>
                  {index + 1} - {hackerspace.name}
                </h3>
                <p>City: {hackerspace.city}</p>
                <p>Province: {hackerspace.province}</p>
                <p>
                  Website:{" "}
                  <a href={hackerspace.website}>{hackerspace.website}/</a>{" "}
                </p>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default App;
