import "./NavBar.css";
import { formatNumber } from "../utils/formatNumber";

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

interface Props {
  episodes: IEpisode[];
  numAllEpisodes: number;
  numResults: number;
  searchText: string;
  handleSearchText: (searchInput: string) => void;
  handleEpisodePicker: (episodePicker: string) => void;
}

export default function NavBar(props: Props): JSX.Element {
  const episodeSelection = props.episodes.map((episode, index) => (
    <option value={episode.name} key={index}>
      {`S${formatNumber(episode.season)} E${formatNumber(episode.number)} - ${
        episode.name
      }`}
    </option>
  ));

  return (
    <nav className="SearchBar">
      <div className="EpisodePicker">
        <select
          name="ChooseEpisode"
          id="ChooseEpisode"
          onChange={(e) => props.handleEpisodePicker(e.target.value)}
        >
          <option value="">Select an episode</option>
          {episodeSelection}
        </select>
      </div>
      <div className="SearchInput">
        <input
          type="text"
          placeholder="Search episodes"
          name="search"
          autoComplete="off"
          value={props.searchText}
          onChange={(e) => props.handleSearchText(e.target.value)}
        />
      </div>
      <p>
        {props.numResults === props.numAllEpisodes
          ? `Displaying ${props.numAllEpisodes} episodes`
          : `Displaying ${props.numResults} of ${props.numAllEpisodes} episodes`}
      </p>
    </nav>
  );
}
