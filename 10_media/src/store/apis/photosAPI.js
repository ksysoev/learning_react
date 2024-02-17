import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { faker } from '@faker-js/faker';

const photosApi = createApi({
    reducerPath: 'photos',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
    endpoints: (build) => ({
        fetchPhotos: build.query({
            providesTags: (result, error, album) => {
                let tags = result.map(({ id }) => ({ type: 'Photo', id }));
                tags.push({ type: 'AlbumPhotos', id: album.id });
                return tags;
            },
            query: (album) => {
                return {
                    url: '/photos',
                    params: {
                        albumId: album.id,
                    },
                    method: 'GET',
                };

            },
        }),
        addPhoto: build.mutation({
            invalidatesTags: (result, error, album) => [{ type: 'AlbumPhotos', id: album.id }],
            query: (album) => {
                return {
                    url: '/photos',
                    method: 'POST',
                    body: {
                        albumId: album.id,
                        url: faker.image.abstract(150, 150, true),
                    },
                };
            },
        }),
        removePhoto: build.mutation({
            invalidatesTags: (result, error, photo) => [{ type: 'Photo', id: photo.id }],
            query: (photo) => {
                return {
                    url: `/photos/${photo.id}`,
                    method: 'DELETE',
                };
            },
        }),
    }),
});

export const { useFetchPhotosQuery, useAddPhotoMutation, useRemovePhotoMutation } = photosApi;
export { photosApi };