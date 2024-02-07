import LocationDetail from '../../components/LocationDetail';

export async function getServerSideProps(context) {
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
