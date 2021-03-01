

import React, { useState } from "react";
import { GetServerSideProps } from 'next'
import { InferGetServerSidePropsType } from 'next'
import MainContainer from "../components/mainContainer.js";
import Board from "../components/board";


export const getServerSideProps: GetServerSideProps = async (context) => {

  const apiUrl = "https://boardnextype.herokuapp.com/api/board/boardList";
  
  const res: Response = await fetch(apiUrl);

  const boardList:JSON = await res.json();

  return {
      props: { 
          data: boardList,
      },
  };
}

export default function Home({data}) {
  return (
    <MainContainer>
      <Board data={data}/>
    </MainContainer>
  );
}