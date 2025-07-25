// src/services/api.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface Item {
    id: number
    query: string
}

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_SERVER_URL }),
    endpoints: (builder) => ({
        getItems: builder.query<Item[], void>({
            query: () => 'items',
        }),
        postItem: builder.mutation<Item, Partial<Item>>({
            query: (newItem) => ({
                url: 'query',
                method: 'POST',
                body: newItem,
            }),
        }),
    }),
})

export const { useGetItemsQuery, usePostItemMutation } = api
