import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  grid-area: header;
  height: 88px;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
  display: flex;
  justify-content: space-between;
  padding: 0 88px;
`

export const Profile = styled(Link)`
  display: flex;
  align-items: center;

  > img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    line-height: 24px;
    margin-left: 16px;

    span {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      font-size: 14px;
    }

    strong {
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-size: 16px;
    }
  }
`;

export const NavButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.6rem
`