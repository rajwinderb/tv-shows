import "./NavBar.css";

export default function NavBar(): JSX.Element {
  return (
    <div id="nav">
      <input
        type="text"
        placeholder="Search.."
        name="search"
        autoComplete="off"
      />
      <p>Displaying n of all episodes</p>
    </div>
  );
}
