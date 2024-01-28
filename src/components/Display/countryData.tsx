import React from 'react';
import { useGetCountryQuery } from '../../services/api';
import CountryBadge from '../countryBadge/page';

function HomePage() {
  const { data, error, isLoading } = useGetCountryQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    // return <div>Error: {error.message}</div>;
  }

  return (
    <div className='px-20 w-full grid grid-cols-4 gap-20'>

      {data && Array.isArray(data) ? (
        data.map((item) => (
          <CountryBadge key={item.id} flag={item.flags.png} name={item.name.common} population={item.population} region={item.region} capital={item.capital}/>
        ))
      ) : (
        <div>No data available</div>
      )}
    </div>
  );
}

export default HomePage;
