import DisplayItems from "./components/DisplayItems";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <br />
      <br />
      <br />
      <br />
      <DisplayItems
        apiEndpoint={`${process.env.REACT_APP_API_EVENTS}`}
        itemHeading={"Events"}
        hackerspacesOn={false}
        eventsOn={true}
      />
    </>
  );
}

export default App;
