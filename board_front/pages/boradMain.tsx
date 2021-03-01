import React, { useState } from "react";
import MainContainer from "../components/mainContainer.js";
import Board from "../components/board";

function BoardMain({data}) {
  //const [text, setText] = useState<string>("자바스크립트");
  return (
    <MainContainer>
      <Board data={data}/>
    </MainContainer>
  );
}



export default BoardMain;