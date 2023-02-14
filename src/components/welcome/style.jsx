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
  width: 70px;
  height: 50px;
  background: #efe0f8;
  border-radius: 20px;
`;

export const H1 = styled.h1`
  width: 223px;
  height: 80px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  color: #17131e;
  margin-top: 20px;

  span {
    font-weight: 800;
  }
`;

export const P = styled.p`
  text-indent: 2em;
  width: 263px;
  height: 115px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  text-align: justify;
  color: #7b718b;
`;

export const DivFlutter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;

  width: 320.16px;
  height: 326px;
  background: linear-gradient(
    180deg,
    #fff4fe 0%,
    rgba(254, 237, 244, 0.58) 100%
  );
  border-radius: 20px;
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
  cursor: pointer;

  margin-top: 31px;
`;
