import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ItemListContainer from "./containers/ItemListContainer";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer />
      <Footer />
    </div>
  );
}

export default App;
