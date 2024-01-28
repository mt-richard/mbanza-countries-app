import React from 'react';
import { useGetCountryDetailsQuery } from '../../services/api';

function CountryDetailPage({countryName} : any) {
  const { data, error, isLoading } = useGetCountryDetailsQuery(countryName);

  if (isLoading) {
    return <div className='items-center text-center'>Loading...</div>;
  }

  if (error) {
    // return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }

  return (
    <div>
         {data && Array.isArray(data) ? (
        data.map((item) => (
            <>
                <img src={item.flags.png} alt={`Flag of ${item.name.common}`} />
                <h1>{item.name.common}</h1>
                <p>Population: {item.population}</p>
                <p>Region: {item.region}</p>
                <p>Capital: {item.capital}</p>
            </>
        ))
      ) : (
        <div>No data available</div>
      )}
      
      {/* Add more details as needed */}
    </div>
  );
}

export default CountryDetailPage;
