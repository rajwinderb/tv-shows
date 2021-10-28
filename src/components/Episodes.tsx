import "./Episodes.css";
import episodes from "../episodes.json";
import Episode from "./Episode";

export default function Episodes(): JSX.Element {
  return (
    <section>
      {episodes.map((SingleEpisode, index) => (
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
      ))}
    </section>
  );
}
