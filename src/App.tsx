import Header from "./components/Header";

function App() {
  // Testing API
  const url = process.env.REACT_APP_API_URL as string;

  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data));

  return (
    <>
      <Header />
    </>
  );
}

export default App;
