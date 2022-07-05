import { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { minutes, hours } from "./atoms";

function App() {
  const [minute, setMinute] = useRecoilState(minutes);
  const [hour, setHour] = useRecoilState(hours);
  // const [minute, setMinute] = useState(0);

  const onChange = (e) => {
    setMinute(e.target.value);
  }

  const onChangeHour = (e) => {
    setHour(e.target.value);
  }

  return (
    <Container>
      <input type="number" value={minute} onChange={onChange} />
      <input type="number" value={hour} onChange={onChangeHour} />
    </Container>
  );
}

const Container = styled.div``;

export default App;
