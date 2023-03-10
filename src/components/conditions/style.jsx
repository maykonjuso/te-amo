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
  align-items: space;
  justify-content: center;
  width: 70px;
  height: 50px;
  background: #efe0f8;
  border-radius: 20px;
`;

export const H1 = styled.h1`
  width: 223px;
  height: 20px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  color: #17131e;
`;

export const DivCondit = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const TittleGreen = styled.h2`
  width: 62px;
  height: 23px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 22px;
  text-align: center;
  color: #61ab87;
`;

export const TittleRed = styled.h2`
  margin-top: 30px;
  width: 62px;
  height: 23px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 22px;
  text-align: center;
  color: #ab6161;
`;

export const P = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  text-align: center;
  width: 263px;
  height: 46px;
  color: #7b718b;

  span {
    font-weight: 700;
  }
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
  outline: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-focus-ring-color: transparent;
  /* mix-blend-mode: luminosity; */
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
