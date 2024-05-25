import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 88px auto;
  grid-template-areas: 
  "header"
  "content";

  > main {
    grid-area: content;
    overflow-y: auto;
  }
  
  .tag-section {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
`;

export const Form = styled.form`
  max-width: 550px;
  margin: 16px auto;

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;

    a {
      font-size: 20px;
      color: ${({ theme }) => theme.COLORS.GRAY_100}
    }
  }
`;