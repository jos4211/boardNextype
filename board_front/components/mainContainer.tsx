import React from "react";
import styled from "styled-components";

const MainContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function pageContainer({ children }) {
  return <MainContainer>{children}</MainContainer>;
}
