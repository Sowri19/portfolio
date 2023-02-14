import Header from "./components/Header/Header"
import css from "./styles/app.module.scss";
import Hero from "./components/hero/hero";
import Experties from "./components/Experties/Experties";
const App = () => {
  //don't forget to add font link in index.html
  return <div className= {`bg-primary ${css.container}`}>
    <Header />
    <Hero />
    <Experties/>
  </div>;
};

export default App;
