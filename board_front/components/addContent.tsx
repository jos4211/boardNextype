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
        width:50px;
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


export default function boardMain({onChange,title,writer,content,onSubmit}) {


  return (
    <>
      <Table>
            <Thead>
            <tr>
                <th>제목</th>
                <td><input value={title} name="title" onChange={onChange}/></td>
            </tr>
            <tr>
                <th>작성자</th>
                <td><input value={writer} name="writer" onChange={onChange}/></td>
            </tr>
            </Thead>
            <Tbody>
                <tr>
                    <td>내용</td>
                    <td>
                        <textarea value={content} name="content" onChange={onChange}/>
                    </td>
                </tr>
            </Tbody>
            <Tfoot>
                <tr>
                    <td>
                        <AddButton onClick={onSubmit} value="ok">등록</AddButton>
                    </td>
                    <td>
                        <AddButton onClick={onSubmit} value="no">취소</AddButton>
                    </td>
                </tr>
            </Tfoot>
      </Table>
    </>
  );
}



