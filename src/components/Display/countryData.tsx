// components/HomePage.tsx
import React, { useState } from 'react';
import Link from 'next/link';
import { useGetCountryQuery } from '../../services/api';
import CountryBadge from '../countryBadge/page';
import SearchBar from '../Forms/Search';
import SelectBox from '../Forms/Select';

interface Country {
  id: string;
  flags: {
    png: string;
  };
  name: {
    common: string;
  };
  population: number;
  region: string;
  capital: string;
}

function HomePage() {
  const { data, error, isLoading } = useGetCountryQuery();
  const [filteredData, setFilteredData] = useState<Country[] | null>(null);

  const handleSearch = (searchTerm: string) => {
    if (!searchTerm) {
      setFilteredData(null);
      return;
    }

    const filteredCountries = data?.filter((item) =>
      item.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredData(filteredCountries || null);
  };

  if (isLoading) {
    return <div className='items-center text-center'>Loading...</div>;
  }

  const countriesToDisplay = filteredData || data || [];

  return (
    <div>
      <div className="md:flex justify-between md:px-20 px-5 py-10">
        {/* <SearchBar/> */}
        <SearchBar onSearch={handleSearch} />
        <SelectBox/>
      </div>
     

      <div className='md:px-20 px-5 md:w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-20'>
        {countriesToDisplay.map((item) => (
          <Link key={item.id} href={`/${item.name.common}`}>
            
              <CountryBadge
                flag={item.flags.png}
                name={item.name.common}
                population={item.population}
                region={item.region}
                capital={item.capital}
              />
            
          </Link>
        ))}
        {countriesToDisplay.length === 0 && <div className='w-full items-center text-center'>No data available</div>}
      </div>
    </div>
  );
}

export default HomePage;
