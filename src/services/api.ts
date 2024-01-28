// src/services/api.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface CountryData {
  clients: {
    id: number;
    name: string;
    // ... other properties
  }[];
}

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://restcountries.com/v3.1/' }),
  endpoints: (builder) => ({
    getCountry: builder.query<CountryData, void>({
      query: () => 'all',
    }),
  }),
});

export const { useGetCountryQuery } = api;
