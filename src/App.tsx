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
        apiEndpoint={`${process.env.REACT_APP_API_HACKERSPACES}`}
        itemHeading={"Hackerspaces:"}
        hackerspacesOn={true}
        eventsOn={false}
      />
    </>
  );
}

export default App;
