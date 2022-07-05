import { atom, selector } from "recoil";

export const selectedCategory = atom({
  key: "category",
  default: "cate-1"
});

export const myList = atom({
  key: "list",
  default: [
    {
      id: 1,
      category: "cate-1",
      content: "내용1"
    },
    {
      id: 2,
      category: "cate-1",
      content: "내용2"
    },
    {
      id: 3,
      category: "cate-2",
      content: "내용3"
    },
    {
      id: 4,
      category: "cate-2",
      content: "내용4"
    },
    {
      id: 5,
      category: "cate-1",
      content: "내용5"
    }
  ],
});

export const myListbyCategory = selector({
  key: "myListbyCategory",
  get: ({ get }) => {
    const list = get(myList);
    const cate = get(selectedCategory);
    return list.filter((item) => item.category === cate);
  },
  set: ({ get, set }, newValue) => {
    // newValue = { id: 1, content: "내용" }
    const list = get(myList);
    set(myList, [...list, newValue]);
  }
});