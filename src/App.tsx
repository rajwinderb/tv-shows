import { useState, useEffect } from "react";
import "./App.css";
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import Episodes from "./components/Episodes";
import NavBar from "./components/NavBar";

interface IEpisode {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  type: string;
  airdate: string;
  airtime: string;
  airstamp: string;
  runtime: number;
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  _links: { self: { href: string } };
}

function App(): JSX.Element {
  const [episodelist, setEpisodeList] = useState<IEpisode[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  const [allEpisodes, setAllEpisodes] = useState<number>(0);
  const [numResults, setNumResults] = useState<number>(0);
  const [episodePicker, setEpisodePicker] = useState<string>("");

  useEffect(() => {
    const fetchEpisodes = () => {
      fetch("https://api.tvmaze.com/shows/82/episodes")
        .then((response) => response.json())
        .then((jsonBody: IEpisode[]) => setEpisodeList(jsonBody));
    };

    fetchEpisodes();
  }, []);

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
