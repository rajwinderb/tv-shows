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
    <div>
      <h3>episode name: {episode.name}</h3>
      <p>image here</p>
      <p>description: {episode.summary}</p>
    </div>
  );
}
