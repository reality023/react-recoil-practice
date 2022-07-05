import { useRef } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { myList, myListbyCategory, selectedCategory } from "./atoms";

function App() {
  const inputRef = useRef(null);
  const selectRef = useRef(null);
  // const [list, setList] = useRecoilState(myList);
  const [list, setList] = useRecoilState(myListbyCategory);
  const [selected, setSelected] = useRecoilState(selectedCategory);

  const onClick = (e) => {
    const content = inputRef.current.value;
    // setList((current) => { // 불변성
    //   return [...current, { id: Date.now(), content }];
    // });
    setList({ id: 1, content, category: selected });
  }

  const remove = (id) => {
    setList((current) => {
      return current.filter((v) => v.id !== id);
    });
  }

  const onChange = (e) => {
    setSelected(selectRef.current.value);
  }

  return (
    <Container>
      <select ref={selectRef} onChange={onChange}>
        <option value="cate-1">카테고리1</option>
        <option value="cate-2">카테고리2</option>
      </select>
      {
        list.map((value, idx) => {
          return (
            <List key={idx}>
              <div>{value.content}</div>
              <button onClick={(event) => { remove(value.id) }}>삭제</button>
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
