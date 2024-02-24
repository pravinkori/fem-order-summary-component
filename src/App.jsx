import Card from "./components/Card/Card";
import Credits from "./components/Credits/Credits";
import "./css/App.css";

function App() {
  return (
    <>
      <Card
        planPrice="59.99"
        planType="Annual Plan"
        orderDescription="You can now listen to millions of songs, audiobooks, and podcasts on
        any device anywhere you like!"
      />
      <Credits name={"Pravin Kori"} githubUserName={"pravinkori"} />
    </>
  );
}

export default App;
