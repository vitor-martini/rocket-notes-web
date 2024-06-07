import styled from "styled-components";

export const Button = styled.button`
  border: none;
  background: none; 

  > svg {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 36px;

    &:hover {
      color: ${({ theme }) => theme.COLORS.ORANGE};
    }
  }
`;
