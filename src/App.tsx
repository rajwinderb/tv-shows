import "./App.css";
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import Episodes from "./components/Episodes";

function App(): JSX.Element {
  return (
    <>
      <AppHeader />
      <Episodes />
      <AppFooter />
    </>
  );
}

export default App;
