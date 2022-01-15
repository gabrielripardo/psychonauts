import { configureStore } from "@reduxjs/toolkit";
import reducer from "./psychonauts";
import api from "./middleware/api";

export default function store() {
  return configureStore({
    reducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(api),
  });
}
