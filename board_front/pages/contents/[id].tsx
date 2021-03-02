import React from "react";
import MainContainer from "../../components/mainContainer";
import Contents from "../../components/contents";
import axios from "axios";
import { GetServerSideProps } from 'next'
import { InferGetServerSidePropsType } from 'next'

export async function getStaticPaths() {

  const apiUrl:string = "https://boardnextype.herokuapp.com/api/board/boardList";
  
  const res: Response = await fetch(apiUrl);

  const boardList = await res.json();

  const paths = boardList.map((props)=> ({ params: { id: props._id } }))

  return {paths,fallback: false };
}

export const getStaticProps: GetServerSideProps = async ({params}) => {

  const apiUrl:string = `https://boardnextype.herokuapp.com/api/board/viewContent/?postId=${params.id}`;
  
  const res: Response = await fetch(apiUrl);

  const post = await res.json();

  return {
      props: { 
        post: post,
      },
  };
}

export default function contents({post}) {

  return (
    <MainContainer>
      <Contents post={post}/>
    </MainContainer>
  );
}