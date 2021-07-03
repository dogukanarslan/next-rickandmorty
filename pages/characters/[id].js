import CharacterDetail from '../../components/CharacterDetail';

export async function getStaticPaths() {
  const res = await fetch(`${process.env.RICKANDMORTY_API}/character`);
  const data = await res.json();

  const paths = data.results.map((character) => ({
    params: { id: character.id.toString() }
  }));

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps(context) {
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
