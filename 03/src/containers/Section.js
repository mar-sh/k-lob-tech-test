import React from 'react';
import useFetchData from '../hooks/useFetchData';
import GridList from '../components/GridList';
import BackButton from '../components/BackButton'
import Alert from '../components/Alert';

export default function Section({ match }) {
  const [{ data }, loading, error] = useFetchData(`/asset${match.url}.json`);

  return (
    <>
      <BackButton />
      <div className='container'>
        {loading && <h1 className='text-center'>Loading...</h1>}
        {error && <Alert text={error.message} />}
        {data && !error && <GridList data={data} />}
      </div>
    </>
  );
}
