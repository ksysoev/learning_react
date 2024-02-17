import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { faker } from '@faker-js/faker';

const albumsApi = createApi({
    reducerPath: 'albums',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
    endpoints: (build) => ({
        fetchAlbums: build.query({
            providesTags: (result, error, user) => {
                let tags = result.map(({ id }) => ({ type: 'Album', id }));
                tags.push({ type: 'UserAlbums', id: user.id });
                return tags;
            },
            query: (user) => {
                return {
                    url: '/albums',
                    params: {
                        userId: user.id,
                    },
                    method: 'GET',
                };

            },
        }),
        addAlbum: build.mutation({
            invalidatesTags: (result, error, user) => [{ type: 'UserAlbums', id: user.id }],
            query: (user) => {
                return {
                    url: '/albums',
                    method: 'POST',
                    body: {
                        userId: user.id,
                        title: faker.commerce.productName(),
                    },
                };
            },
        }),
        removeAlbum: build.mutation({
            invalidatesTags: (result, error, album) => [{ type: 'Album', id: album.id }],
            query: (album) => {
                return {
                    url: `/albums/${album.id}`,
                    method: 'DELETE',
                };
            },
        }),
    }),
});

export const { useFetchAlbumsQuery, useAddAlbumMutation, useRemoveAlbumMutation } = albumsApi;
export { albumsApi };