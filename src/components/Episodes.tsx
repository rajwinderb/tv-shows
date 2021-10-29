import "./Episodes.css";
import episodes from "../episodes.json";
import Episode from "./Episode";

interface Props {
  searchText: string;
  handleAllEpisodes: (num: number) => void;
  handleNumResults: (num: number) => void;
}

export default function Episodes(props: Props): JSX.Element {
  props.handleAllEpisodes(episodes.length);
  const filteredEpisodes = episodes
    .filter((episode) => {
      if (
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
    <section>
      {filteredEpisodes.length !== 0 ? (
        filteredEpisodes
      ) : (
        <p>No Episodes found</p>
      )}
    </section>
  );
}
