import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";

const Table = styled.table`
    margin: 100px 0;
    border-top:1px solid black;
    border-bottom:1px solid black;
    width:700px;
    height:600px;
    border-collapse: collapse;

    tr>th,tr>td{
        border-bottom: 1px solid #c9c5c5;
    }

`;

const Thead = styled.thead`

    th{
        height:50px;
        background-color:rgba(0,0,0,0.02);
        padding: 0 30px;
    }

    td>td{
        width:500px;
        text-align: center;
    }

    
`;

const Tbody = styled.tbody`


`;

const Tfoot = styled.tfoot`

    th{
        height:50px;
        background-color:rgba(0,0,0,0.02);
        padding: 0 30px;
    }

    tr{
        text-align:right;
    }
    td{
        border:none;
    }
    
    tr:last-child>td{
        border:none;
    }


    
`;

const AddButton = styled.button`
    width:80px;
    height:35px;
    margin:10px;
    cursor:pointer;
    background-color:#3685fa;
    color:white;
    border:none;
    border-radius: 5px;

    :hover{
        background-color: #1972f8;
    }

`;

export default function boardMain({post}) {
    console.log("post",post);
  return (
    <>
      <Table>
        <Thead>
          <tr>
              <th>{post.title}</th>
          </tr>
          <tr>
                <td>
                    <th>등록일</th>
                    <td>{post.createdDate}</td>
                </td>
          </tr>
          <tr>
            <td>
                <th>작성자</th>
                <td>{post.writer}</td>
            </td>
          </tr>
        </Thead>
        <Tbody>
            <tr>
                <td>{post.content}</td>
            </tr>
        </Tbody>
        <Tfoot>
            <tr>
                <td>
                    <th>조회수</th>
                    <td>{post.views}</td>
                </td>
            </tr>
            <tr>
                <td>
                    <AddButton>수정</AddButton>
                    <AddButton>삭제</AddButton>
                </td>
            </tr>
        </Tfoot>
      </Table>
    </>
  );
}