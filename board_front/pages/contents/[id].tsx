import React from "react";
import MainContainer from "../../components/mainContainer.js";
import Contents from "../../components/contents";

import { GetServerSideProps } from 'next'
import { InferGetServerSidePropsType } from 'next'


export const getServerSideProps: GetServerSideProps = async (context) => {

  const id:string|string[] = context.params.id;

  const postId = {
    postId:id.toString()
  };

  const apiUrl:string = `https://boardnextype.herokuapp.com/api/board/viewContent/?postId=${postId.postId}`;
  
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