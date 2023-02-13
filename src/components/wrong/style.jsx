import styled from "styled-components";

export const Body = styled.body`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Div = styled.div`
  position: relative;
  bottom: -25px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: max-content;
  padding: 10px 0px;
  background: #efe0f8;
  border-radius: 20px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  color: #ab6161;
`;

export const H1 = styled.h1`
  margin: 50px 0px 20px 0px;
  max-width: 255px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #17131e;
`;

export const P = styled.p`
  width: 240px;
  height: 27px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #17131e;
`;

export const DivFlutter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  height: max-content;
  background: linear-gradient(
    180deg,
    #fff4fe 0%,
    rgba(254, 237, 244, 0.58) 100%
  );
  border-radius: 20px;
  padding-bottom: 40px;
  width: 320.16px;
`;

export const Button = styled.button`
  width: 156px;
  height: 40px;
  background: rgba(249, 249, 249, 0.62);
  mix-blend-mode: luminosity;
  border-radius: 20px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  display: table-cell;
  vertical-align: middle;
  color: #17131e;
  border: none;
  margin-top: 31px;
  cursor: pointer;
`;
