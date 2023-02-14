import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ceb8e9;
  width: 258px;
  height: max-content;
  border-radius: 30px;
  margin-top: 5px;
  padding: 10px 10px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background: #e9b8be;
  }
`;
