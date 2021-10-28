import "./Episode.css";

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

export default function Episode(episode: IEpisode): JSX.Element {
  return (
    <div id="episode">
      <h3>{episode.name}</h3>
      <h4>
        Season {episode.season} Episode {episode.number}
      </h4>
      <img src={episode.image.medium} alt={episode.name} />
      <p>
        {episode.summary
          .slice(3, -4)
          .replace("<p>", "")
          .replace("</p>", "")
          .replace("<br>", "")
          .replace("<br>", "")
          .replace("<p></p>", "")}
      </p>
    </div>
  );
}
