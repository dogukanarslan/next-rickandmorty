import CharacterDetail from '../../components/CharacterDetail';

export async function getServerSideProps(context) {
  const res = await fetch(
    `${process.env.RICKANDMORTY_API}/character/${context.params.id}`
  );
  const data = await res.json();

  return {
    props: {
      character: data
    }
  };
}

const Character = (props) => {
  const { character } = props;

  return <CharacterDetail character={character} />;
};

export default Character;
