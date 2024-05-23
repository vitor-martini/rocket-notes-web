import styled from "styled-components";
import backgroundImg from "../../assets/background.png"

export const Container = styled.div`
  height: 100vh;
  display: grid;
  place-content: center;
  align-items: stretch;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-width: 400px;

  > h1 {
    font-size: 48px;
    color: ${({theme}) => theme.COLORS.ORANGE};
  }

  > h2 {
    font-size: 24px;
    padding: 36px;
  }

  > p {
    font-size: 14px;
    color:  ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > a {
    margin-top: 124px;
    color:  ${({ theme }) => theme.COLORS.ORANGE};
  }
`;

export const BackgroundImg = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
  filter: brightness(0.7);
`