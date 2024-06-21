import DisplayItems from "./components/DisplayItems";
import Header from "./components/Header";
import { useGetHackerspaces } from "./lib/api-hooks";
import { FetchState } from "./types";

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

// function App() {
//   return (
//     <>
//       <Header />
//       <br />
//       <br />
//       <br />
//       <br />
//       <DisplayItems
//         apiEndpoint={`${process.env.REACT_APP_API_HACKERSPACES}`}
//         itemHeading={"Hackerspaces:"}
//         hackerspacesOn={true}
//         eventsOn={false}
//       />
//     </>
//   );
// }

// export default App;
