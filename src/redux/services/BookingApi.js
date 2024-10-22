import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const bookingApi = createApi({
  reducerPath: "bookingApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://room-booking-and-management-system-server.onrender.com/api/booking",
  }),
  tagTypes: ["booking"],
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "booking",
    }),
  }),
});
