"use client"

import React from 'react';
import { MdKeyboardBackspace } from "react-icons/md";
import { useGetCountryDetailsQuery } from '../../services/api';
import Navbar from '@/components/navBar/page';
import Link from 'next/link';

function CountryDetailPage() {
  
  const { data, error, isLoading } = useGetCountryDetailsQuery('Andorra');

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
    <div className='px-5 md:px-20'>
      <Navbar/>
      <Link href='/'>
       <button className='mt-5 mb-5 py-2 px-3 rounded-lg flex justify-center items-center gap-2 border border-gray-300'>
        <MdKeyboardBackspace/>
        Back
        </button>
      </Link>

      {data && Array.isArray(data) ? (
        data.map((item) => (
          <>
          <div className='md:flex w-full'> 
             <div className='md:w-1/2 md:p-20'>
                <img src={item.flags.png} alt={`Flag of ${item.name.common}`} className='md:w-4/5 object-cover'/>
            </div>
            <div className='md:w-1/2 md:py-20'>
              <h1 className='font-bold py-2'>{item.name.official}</h1>
              <div className='md:flex'>
                  <ul className='w-1/2' >
                    <li className='list'>Native Name:<span className='font-light'> {item.name.common}</span></li>
                    <li className='list'>Population:<span className='font-light'> {item.population}</span></li>
                    <li className='list'>Region:<span className='font-light'> {item.region}</span></li>
                    <li className='list'>Sub-Region:<span className='font-light'> {item.subregion}</span></li>
                    <li className='list'>Capital:<span className='font-light'> {item.capital}</span></li>
                  </ul>
                  <ul className='w-1/2'>
                    <li className='list'>Top Level Domain:<span className='font-light'> {item.domain}</span></li>
                    <li className='list'>Currencies:<span className='font-light'> {item.currencies.EUR.name}</span></li>
                    <li className='list'>Language:<span className='font-light'> {item.languages.cat}</span></li>
                  </ul>
               </div>
               <div className='py-10'>
                  <span>Border Countries : {item.borders}</span>
                </div>
                
            </div>

          </div>
           
          
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
