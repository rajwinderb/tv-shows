import "./NavBar.css";

interface Props {
  allEpisodes: number;
  numResults: number;
  searchText: string;
  handleSearchText: (searchInput: string) => void;
}

export default function NavBar(props: Props): JSX.Element {
  return (
    <div id="nav">
      <input
        type="text"
        placeholder="Search.."
        name="search"
        autoComplete="off"
        value={props.searchText}
        onChange={(e) => props.handleSearchText(e.target.value)}
      />
      <p>
        {props.numResults === props.allEpisodes
          ? `Displaying ${props.allEpisodes} episodes`
          : `Displaying ${props.numResults} of ${props.allEpisodes} episodes`}
      </p>
    </div>
  );
}
