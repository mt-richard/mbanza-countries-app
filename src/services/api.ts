// src/services/api.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Country {
  id: string;
  flags: {
    png: string;
  };
  name: {
    common: string;
    official: string;
    nativeName: {
      cat: {
        common: string;
        official: string;
      };
    };
  };
  population: number;
  region: string;
  capital: string;
  subregion: string;
  domain: string;
  currencies: {
    EUR:{
      name: string;
    }
  };
  languages: {
    cat: string;
  };
  borders: [string, string];
 
}


export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://restcountries.com/v3.1/' }),
  endpoints: (builder) => ({
    getCountry: builder.query<Country[], void>({
      query: () => 'all',
    }),
    getCountryDetails: builder.query<Country[], any>({
      query: (name) => `name/${name}`
    }),
  }),
});


export const { useGetCountryQuery, useGetCountryDetailsQuery } = api;
