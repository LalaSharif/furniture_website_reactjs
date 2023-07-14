import Banner from "./components/Banner/Banner";
import Contacts from "./components/Contact/Contacts";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Mostpopular from "./components/Mostpopular/Mostpopular";
import MostpopularItem from "./components/MostpopularItem/MostpopularItem";
import Products from "./components/Products/Products";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Header />

      <Home />

      <Banner />

      <Products />
      <Mostpopular />
      <MostpopularItem />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
