import { generateQuery } from 'utils';

import PaginationButtons from 'components/PaginationButtons';
import EpisodesForm from 'components/EpisodesForm';
import EpisodeList from 'components/EpisodeList';

const getData = async (params) => {
  let url = `${process.env.RICKANDMORTY_API}/episode?`;

  const { page = 1, name = '', episode = '' } = params;

  url += generateQuery([
    { label: 'page', value: page },
    { label: 'name', value: name },
    { label: 'episode', value: episode }
  ]);

  const res = await fetch(url);

  return res.json();
};

const EpisodesPage = async (props) => {
  const { results: episodes, info } = await getData(props.searchParams);

  return (
    <>
      <EpisodesForm />
      <EpisodeList episodes={episodes} />
      <PaginationButtons
        info={info}
        currentPage={props.searchParams.page || 1}
      />
    </>
  );
};

export default EpisodesPage;
