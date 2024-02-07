import EpisodeDetail from '../../components/EpisodeDetail';


export async function getServerSideProps(context) {
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
