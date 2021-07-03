import LocationDetail from '../../components/LocationDetail';

export async function getStaticPaths() {
  const res = await fetch(`${process.env.RICKANDMORTY_API}/location`);
  const data = await res.json();

  const paths = data.results.map((location) => ({
    params: { id: location.id.toString() }
  }));

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps(context) {
  const res = await fetch(
    `${process.env.RICKANDMORTY_API}/location/${context.params.id}`
  );
  const data = await res.json();

  return {
    props: {
      location: data
    }
  };
}

const Location = (props) => {
  const { location } = props;

  return <LocationDetail location={location} />;
};

export default Location;
