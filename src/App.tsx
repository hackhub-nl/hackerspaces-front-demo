import { useGetHackerspaces } from "./lib/api-hooks";
import { FetchState } from "./types";
import "./App.css";

function App() {
  const [hackerspaces, fetchState, getHackerspaces] = useGetHackerspaces();

  return (
    <div className="container">
      <h1>hackerspaces-front-demo</h1>
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
            {hackerspaces.map((hackerspace) => (
              <li key={hackerspace.id} className="hackerspace">
                <h3>
                  {hackerspace.id} - {hackerspace.name}
                </h3>
                <p>City: {hackerspace.city}</p>
                <p>User Id: {hackerspace.userId}</p>
                <p>Created At: {hackerspace.createdAt}</p>
                <p>Updated At: {hackerspace.updatedAt}</p>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default App;