import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const roomsApi = createApi({
  reducerPath: "roomsApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://room-booking-and-management-system-server.onrender.com/api/room",
  }),
  tagTypes: ["Room"],
  endpoints: (builder) => ({
    getRooms: builder.query({
      query: () => "/",
      providesTags: (result) =>
        result
          ? [
              ...result.data.map(({ _id }) => ({ type: "Room", id: _id })),
              { type: "Room", id: "LIST" },
            ]
          : [{ type: "Room", id: "LIST" }],
    }),
    getSingleRoom: builder.query({
      query: (id) => `/${id}`,
    }),
    deleteRoom: builder.mutation({
      query: ({ id, token }) => {
        return {
          url: `/${id}`,
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
      invalidatesTags: (result, error, { id }) => {
        return [{ type: "Room", id }];
      },
    }),
    updateRoom: builder.mutation({
      query: ({ id, token }) => {
        return {
          url: `/${id}`,
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
      invalidatesTags: (result, error, { id }) => {
        return [{ type: "Room", id }];
      },
    }),
  }),
});

export const {
  useGetRoomsQuery,
  useGetSingleRoomQuery,
  useDeleteRoomMutation,
  useUpdateRoomMutation,
} = roomsApi;
