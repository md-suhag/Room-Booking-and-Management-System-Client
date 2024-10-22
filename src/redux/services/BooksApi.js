import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const booksApi = createApi({
  reducerPath: "booksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
  }),
  tagTypes: ["books"],
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "books",
    }),
  }),
});
