import EpisodeDetail from '../../components/EpisodeDetail';

export async function getStaticPaths() {
  const res = await fetch(`${process.env.RICKANDMORTY_API}/episode`);
  const data = await res.json();

  const paths = data.results.map((episode) => ({
    params: { id: episode.id.toString() }
  }));

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps(context) {
  const res = await fetch(
    `${process.env.RICKANDMORTY_API}/episode/${context.params.id}`
  );
  const data = await res.json();

  return {
    props: {
      episode: data
    }
  };
}

const Episode = (props) => {
  const { episode } = props;

  return <EpisodeDetail episode={episode} />;
};

export default Episode;
