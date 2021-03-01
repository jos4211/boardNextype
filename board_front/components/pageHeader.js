import React from "react";
import styled from "styled-components";
import Link from "next/link";

const HeadContainer = styled.header`
  display: flex;
  width: 100%;
  height: 90px;
  background-color: #000;
  opacity: 0.5;
  align-items: center;
  justify-content: center;
`;

const SiteName = styled.div`
  display: inline-block;
  font-size: 30px;
  font-weight: bold;
  color: white;
`;

export default function pageContainer() {
  return (
    <HeadContainer>
      <Link href="/">
        <a>
          <SiteName>Next / Typescript 게시판</SiteName>
        </a>
      </Link>
    </HeadContainer>
  );
}
