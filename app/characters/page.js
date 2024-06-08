import { generateQuery } from 'utils';

import PaginationButtons from 'components/PaginationButtons';
import CharactersForm from 'lib/CharactersForm';
import CharacterList from 'lib/CharacterList';

const getData = async (params) => {
  let url = `${process.env.RICKANDMORTY_API}/character?`;

  const { page = 1, status = '', gender = '' } = params;

  url += generateQuery([
    { label: 'page', value: page },
    { label: 'status', value: status },
    { label: 'gender', value: gender }
  ]);

  const res = await fetch(url);

  return res.json();
};

const CharactersPage = async (props) => {
  const { results: characters, info } = await getData(props.searchParams);

  return (
    <>
      <CharactersForm />
      <CharacterList characters={characters} />
      <PaginationButtons
        info={info}
        currentPage={props.searchParams.page || 1}
      />
    </>
  );
};

export default CharactersPage;
