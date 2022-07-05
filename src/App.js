import { useEffect, useRef, useState } from "react";
import { atom, useRecoilState } from "recoil";
import styled from "styled-components";

const myList = atom({
  key: "list",
  default: [
    {
      id: 1,
      content: "내용1"
    },
    {
      id: 2,
      content: "내용2"
    }
  ],
});

function App() {
  const inputRef = useRef(null);
  const [list, setList] = useRecoilState(myList);
  // getter(데이터를 가져오는 역할), setter (데이터를 바꾸는 역할)
  // useSetRecoilState(atom); => setter
  // useRecoilValue(atom); => getter
  // useRecoilState(atom); => [getter, setter]
  const onClick = (e) => {

  }
  return (
    <Container>
      {
        list.map((value) => {
          return (
            <List>
              <div>{value.content}</div>
            </List>
          )
        })
      }
      <input type="text" ref={inputRef} />
      <button onClick={onClick}>추가</button>
    </Container>
  );
}

const Container = styled.div``;
const List = styled.div`
  border: 1px solid #ddd;
`;

export default App;
