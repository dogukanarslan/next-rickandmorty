import { generateQuery } from 'utils';

import LocationsForm from 'lib/LocationsForm';
import LocationList from 'lib/LocationList';
import PaginationButtons from 'components/PaginationButtons';

const getData = async (params) => {
  let url = `${process.env.RICKANDMORTY_API}/location?`;

  const { page = 1, name = '', dimension = '' } = params;

  url += generateQuery([
    { label: 'page', value: page },
    { label: 'name', value: name },
    { label: 'dimension', value: dimension }
  ]);

  const res = await fetch(url);

  return res.json();
};

const LocationsPage = async (props) => {
  const { results: locations, info } = await getData(props.searchParams);

  return (
    <>
      <LocationsForm />
      <LocationList locations={locations} />
      <PaginationButtons
        info={info}
        currentPage={props.searchParams.page || 1}
      />
    </>
  );
};

export default LocationsPage;
