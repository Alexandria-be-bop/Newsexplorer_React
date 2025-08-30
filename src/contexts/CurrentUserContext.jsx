import { createContext } from "react";

const currentUser = JSON.parse(localStorage.getItem("user"));
export const CurrentUserContext = createContext(currentUser);
