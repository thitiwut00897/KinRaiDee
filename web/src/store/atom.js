import { atom } from "recoil";

export const userState = atom({
  key: "userState",
  default: null,
});

export const allUsersState = atom({
  key: "allUsersState",
  default: [],
});
