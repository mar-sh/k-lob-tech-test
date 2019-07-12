import React from 'react';
import useFetchData from '../hooks/useFetchData';
import GridList from '../components/GridList';
import Alert from '../components/Alert';

export default function Home() {
  const [{ data }, loading, error] = useFetchData('/asset/index.json');

  return (
    <div className='container'>
      {error && <Alert text={error.message} />}
      {loading && <h1 className='text-center'>Loading...</h1>}
      {data && !error && <GridList data={data} />}
    </div>
  );
}
