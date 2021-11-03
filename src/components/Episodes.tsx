import "./Episodes.css";
import Episode from "./Episode";

interface Props {
  episodes: IEpisode[];
  searchText: string;
  episodePicker: string;
  handleAllEpisodes: (num: number) => void;
  handleNumResults: (num: number) => void;
}

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

export default function Episodes(props: Props): JSX.Element {
  const episodes = props.episodes;
  props.handleAllEpisodes(episodes.length);
  const filteredEpisodes = episodes
    .filter((episode) => {
      if (props.episodePicker !== "") {
        return episode.name.includes(props.episodePicker);
      } else if (
        episode.name.toLowerCase().includes(props.searchText.toLowerCase()) ||
        episode.summary.toLowerCase().includes(props.searchText.toLowerCase())
      ) {
        return episode;
      } else {
        return false;
      }
    })
    .map((SingleEpisode, index) => (
      <Episode
        key={index}
        id={SingleEpisode.id}
        url={SingleEpisode.url}
        name={SingleEpisode.name}
        season={SingleEpisode.season}
        number={SingleEpisode.number}
        type={SingleEpisode.type}
        airdate={SingleEpisode.airdate}
        airtime={SingleEpisode.airtime}
        airstamp={SingleEpisode.airstamp}
        runtime={SingleEpisode.runtime}
        image={SingleEpisode.image}
        summary={SingleEpisode.summary}
        _links={SingleEpisode._links}
      />
    ));
  props.handleNumResults(filteredEpisodes.length);
  return (
    <section className="Episodes">
      {filteredEpisodes.length !== 0 ? (
        filteredEpisodes
      ) : (
        <p>No Episodes found</p>
      )}
    </section>
  );
}
