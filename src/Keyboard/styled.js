import styled, { css } from "styled-components";

export const ContainerKeys = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  justify-content: center;
  align-content: center;
  gap: 15px 20px;
  margin: 20px;
  width: 90%;
  height: 340px;
  border: 1px solid rgb(100, 100, 100);
`;

export const Button = styled.button`
  display: flex;
  width: 65px;
  height: 45px;
  border: 1px solid black;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  font-weight: 900;
  box-shadow: 2px 2px 2.5px 2.5px black;
  border-radius: 5px;
  background-color: hsl(0, 0%, 95%);

  ${({ min }) => min && css`
    height : 30px;
   `};

  ${({ max }) => max && css`
    height : 103px;
    grid-area: 5 / 4 /span 2 / 5;
  `};

  ${({ on }) => on && css`
  background-color: hsl(0, 100%, 50%)
  `};

  ${({ dark }) => dark && css`
  background-color: hsl(0, 0%, 60%)
  `};

  &:hover {
    background-color: hsl(0, 0%, 80%);

    ${({ on }) => on && css`
      background-color: hsl(0, 100%, 45%)
    `};

    ${({ dark }) => dark && css`
      background-color: hsl(0, 0%, 50%)
    `};
  };

  &:active {
    box-shadow: 1px 1px 1px 1px black;
    transition: 0.05s;
    color: rgb(70, 70, 70);
  }
`;