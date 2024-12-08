import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Installation } from "../../types/Installation";

export const installationApi = createApi({
  reducerPath: "installationApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/api/" }),
  tagTypes: ["Installations"],
  endpoints: (build) => ({
    addInstallation: build.mutation<Installation, Partial<Installation>>({
      query(body) {
        return {
          url: `installation`,
          method: "POST",
          body,
        };
      },
    }),
  }),
});

export const {useAddInstallationMutation } = installationApi;