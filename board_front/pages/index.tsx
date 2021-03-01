

import React, { useState } from "react";
import BoardMain from "./boradMain";
import { GetServerSideProps } from 'next'
import { InferGetServerSidePropsType } from 'next'


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
    <>
      <BoardMain data={data}/>
    </>
  );
}