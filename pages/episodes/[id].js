import Head from 'next/head';
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

  return (
    <>
      <Head>
        <title>Rick and Morty | Episode Detail</title>
      </Head>
      <EpisodeDetail episode={episode} />
    </>
  );
};

export default Episode;
