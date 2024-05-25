import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme, $isnew }) => $isnew === "true" ? "transparent" : theme.COLORS.BACKGROUND_900};
  border: ${({ theme, $isnew }) => $isnew === "true" ? `1px dashed ${theme.COLORS.GRAY_300}` : "none"};
  margin-bottom: 8px;
  border-radius: 10px;
  padding-right: 16px;
  width: ${({ $istag }) => $istag === "true" ? "32.36%" : "100%"};

  > button {
    border: none;
    background: none;

    svg {
      font-size: 24px;
    } 
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.RED};
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }

  > input {
    height: 56px;
    width: 100%; 
    padding: 12px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: transparent;
    border: none;
  }
`;