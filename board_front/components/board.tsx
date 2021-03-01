import Axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";


const Table = styled.table`
    margin: 100px 0;
    border-top:1px solid black;
    width:70%;
    border-collapse: collapse;

    th, td{
        height:50px;
        border-bottom: 1px solid #c9c5c5;
    }

`;

const Thead = styled.thead`
    
    th:nth-child(1){
        
        width:5%;
        text-align:center;
    }
    
    th:nth-child(2){
        width:40%;
    }
    
`;

const Tbody = styled.tbody`

    td:nth-child(3), td:nth-child(4), td:nth-child(5){
        color: #aaa8a8;
        text-align:center;
    }
    td:nth-child(1){
    text-align:center;
    }

    td:nth-child(2){
    padding-left: 20px;
    }
    tr{
        cursor:pointer;
    }

    tr:hover{
        background-color: rgba(0,0,0,0.02);
    }
`;

const Tfoot = styled.tfoot`
    tr{
        text-align:right;
    }
    td{
        border:none;
    }

    
`;

const AddButton = styled.button`
    width:80px;
    height:35px;
    margin-top:10px;
    cursor:pointer;
    background-color:#3685fa;
    color:white;
    border:none;
    border-radius: 5px;

    :hover{
        background-color: #1972f8;
    }
`; 


function BoardMain({data}) {

  return (
    <>
      <Table>
        <Thead>
          <tr>
              <th>No</th>
              <th>제목</th>
              <th>글쓴이</th>
              <th>작성시간</th>
              <th>조회수</th>
          </tr>
        </Thead>
        <Tbody>

        {data.map((props,index)=>
            {
                return (
                    <Link href={`/contents/${props._id}`} key={index}>
                        <tr>
                            <td>{index+1}</td>
                            <td>{props.title}</td>
                            <td>{props.writer}</td>
                            <td>{props.createdDate}</td>
                            <td>{props.views}</td>
                        </tr>
                    </Link>
                );
            }
            )}

            
        </Tbody>
        <Tfoot>
            <tr>
                <td/>
                <td/>
                <td/>
                <td/>
                <td>
                    <Link href="/addContent">
                        <AddButton>글쓰기</AddButton>
                    </Link>
                </td>
            </tr>
        </Tfoot>
      </Table>
    </>
  );
}

export default BoardMain;


