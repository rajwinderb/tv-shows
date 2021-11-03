import { useState } from "react";
import episodes from "./episodes.json";
import "./App.css";
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import Episodes from "./components/Episodes";
import NavBar from "./components/NavBar";

function App(): JSX.Element {
  const episodelist = episodes;
  const [searchText, setSearchText] = useState<string>("");
  const [allEpisodes, setAllEpisodes] = useState<number>(0);
  const [numResults, setNumResults] = useState<number>(0);
  const [episodePicker, setEpisodePicker] = useState<string>("");

  return (
    <>
      <AppHeader />
      <NavBar
        episodes={episodelist}
        searchText={searchText}
        handleSearchText={setSearchText}
        numAllEpisodes={allEpisodes}
        numResults={numResults}
        handleEpisodePicker={setEpisodePicker}
      />
      <Episodes
        episodePicker={episodePicker}
        searchText={searchText}
        handleAllEpisodes={setAllEpisodes}
        handleNumResults={setNumResults}
        episodes={episodelist}
      />
      <AppFooter />
    </>
  );
}

export default App;
