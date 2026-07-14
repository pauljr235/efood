import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { RestaurantItem } from '../components/RestaurantsList'
import type { Menu } from '../components/DishesList'

const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-ebac.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getFeaturedRestaurants: builder.query<RestaurantItem[], void>({
      query: () => '/restaurantes'
    }),

    getFeaturedMenu: builder.query<Menu, string>({
      query: (id) => `/restaurantes/${id}`
    })
  })
})

export const { useGetFeaturedRestaurantsQuery, useGetFeaturedMenuQuery } = api

export default api
