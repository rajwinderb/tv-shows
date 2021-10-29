import { useState } from "react";
import "./App.css";
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import Episodes from "./components/Episodes";
import NavBar from "./components/NavBar";

function App(): JSX.Element {
  const [searchText, setSearchText] = useState<string>("");
  const [allEpisodes, setAllEpisodes] = useState<number>(0);
  const [numResults, setNumResults] = useState<number>(0);

  return (
    <>
      <AppHeader />
      <NavBar
        searchText={searchText}
        handleSearchText={setSearchText}
        allEpisodes={allEpisodes}
        numResults={numResults}
      />
      <Episodes
        searchText={searchText}
        handleAllEpisodes={setAllEpisodes}
        handleNumResults={setNumResults}
      />
      <AppFooter />
    </>
  );
}

export default App;
