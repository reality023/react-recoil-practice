import { atom, selector } from "recoil";

export const minutes = atom({
  key: "minutes",
  default: 0
});


export const hours = selector({
  key: "hours",
  get: ({ get }) => {
    const minute = get(minutes);
    return minute / 60;
  },
  set: ({ set }, hour) => {
    set(minutes, hour * 60);
  }
});