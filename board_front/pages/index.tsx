

import React, { useState } from "react";
import { GetServerSideProps } from 'next'
import { InferGetServerSidePropsType } from 'next'
import axios from "axios";
import MainContainer from "../components/mainContainer";
import Board from "../components/board";


export const getStaticProps: GetServerSideProps = async (context) => {

  const apiUrl:string = "https://boardnextype.herokuapp.com/api/board/boardList";

  try{
    const res: Response  = await fetch(apiUrl);
    
    console.log("boardList",res);
    
    const boardList = await res.json();
    
  
    
    return {
      props: { 
        data: boardList,
      },
    };
  }catch(e){
    console.log(e);
    return {
      props: { 
        data: null,
      },
    };
  }
    
  }


export default function Home({data}) {
  return (
    <MainContainer>
      <Board data={data}/>
    </MainContainer>
  );
}