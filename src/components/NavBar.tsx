import "./NavBar.css";

interface Props {
  allEpisodes: number;
  numResults: number;
  searchText: string;
  handleSearchText: (searchInput: string) => void;
}

export default function NavBar(props: Props): JSX.Element {
  return (
    <nav className="SearchBar">
      <input
        type="text"
        placeholder="Search episodes"
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
    </nav>
  );
}
