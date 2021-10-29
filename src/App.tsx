import "./App.css";
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import Episodes from "./components/Episodes";
import NavBar from "./components/NavBar";

function App(): JSX.Element {
  return (
    <>
      <AppHeader />
      <NavBar />
      <Episodes />
      <AppFooter />
    </>
  );
}

export default App;
