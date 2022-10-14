import WelcomePage from "./components/welcomePage";
import NavBar from "./components/navBar/navBar";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <WelcomePage />
      <NavBar />
    </div>
  );
}

export default App;
