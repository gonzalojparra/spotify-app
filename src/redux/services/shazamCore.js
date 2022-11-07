import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

/* const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'd4e65cfe27mshdd5d593119b36a1p1c345fjsncae0ba7a5ade',
    'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
  }
}; */
  
/* fetch( 'https://shazam-core.p.rapidapi.com/v1/charts/world', options )
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err)); */

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', 'd4e65cfe27mshdd5d593119b36a1p1c345fjsncae0ba7a5ade');
      return headers;
    }
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => '/charts/world' }),
    getSongsByGenre: builder.query({ query: (genre) => `/charts/genre-world?genre_code=${genre}` }),
    getSongDetails: builder.query({ query: ({songid}) => `/tracks/details?track_id=${songid}` }),
    getSongRelated: builder.query({ query: ({songid}) => `/tracks/related?track_id=${songid}`}),
    getArtistDetails: builder.query({ query: (artistId) => `/artists/details?artist_id=${artistId}` }),
    getSongsBySearch: builder.query({ query: (searchTerm) => `/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}` })
  })
});

export const {
  useGetTopChartsQuery,
  useGetSongsByGenreQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
  useGetArtistDetailsQuery,
  useGetSongsBySearchQuery
} = shazamCoreApi;