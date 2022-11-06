import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
  
export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '9418b554f1msh6ea7c9d04929dc0p1be381jsn91718b5754bd');

            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => '/charts/world'}),
        getSongDetails: builder.query({ query: ({ songid }) => `/tracks/details?track_id=${songid}`}),
        getSongsByGenre: builder.query({ query: (genre) => `/charts/genre-world?genre_code=${genre}`}),
        getSongRelated: builder.query({ query: ({ songid }) => `/tracks/related?track_id=${songid}`}),
        getArtistDetails: builder.query({ query: (artistId) => `/artists/details?artist_id=${artistId}`}),
        getSongsByCountry: builder.query({ query: (countryCode) => `/charts/country?country_code=${countryCode}`}),
        getSongsBySearch: builder.query({ query: (searchTerm) => `/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}`}),
    }),
});

export const {
    useGetTopChartsQuery,
    useGetSongDetailsQuery,
    useGetSongsByGenreQuery,
    useGetSongRelatedQuery,
    useGetArtistDetailsQuery,
    useGetSongsByCountryQuery,
    useGetSongsBySearchQuery,
} = shazamCoreApi;