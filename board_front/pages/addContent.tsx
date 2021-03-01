import React, { useState, useEffect, useReducer } from "react";
import axios from "axios";
import {useRouter} from "next/router";
import MainContainer from "../components/mainContainer.js";
import AddContent from "../components/addContent";


function reducer(state, action) {
  // 값 다 지워주기
  switch (action.type) {
    case "RESET":
      return {
        ...state,
        title: "",
        writer: "",
        content: "",
      };
    // case "ADD_ERROR":
    //   return {
    //     ...state,
    //     errorText: "이름을 입력해 주세요.",
    //   };
    // case "TABLECLICK":
    //   return {
    //     ...state,
    //     isTablename: action.name,
    //     isTableId: action.id,
    //   };

  }
  return {
    ...state,
    [action.name]: action.value,
  };
}
  const apiUrl = "https://boardnextype.herokuapp.com/api/board/addContent";




export default function addContent() {

  const router  = useRouter();

  const [state, dispatch] = useReducer(reducer, {
    title: "",
    writer: "",
    content: "",
  });

  const { title, writer, content } = state;

  const onChange = (e) => {
    dispatch(e.target);
  };

  const onSubmit = async(value)=> {

    if(value.target.value === "ok"){

      if(title !== "" && writer !== ""){
        if(content !== ""){

          const formData = 
          {
            title: title,
            writer: writer,
            content: content,
          };

          const result = await axios.post("http://localhost:4000/api/board/addContent", formData);

          alert("게시물 작성이 완료되었습니다.");
          dispatch({ type: "RESET" });
        router.push("/");
        }else{
          alert("내용을 입력해 주세요.");
        }
      }else{
        alert("제목 혹은 작성자를 입력해 주세요.");
        
      }

    }else{
        router.push("/");
    }
}

  return (
    <MainContainer>
      <AddContent onChange={onChange} title={title} writer={writer} content={content} onSubmit={onSubmit} />
    </MainContainer>
  );
}