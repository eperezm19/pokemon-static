import styled from 'styled-components';

export const StyledMainLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 70px 1fr;
  height: 100%;
  min-height: 100vh;

  & main {
    height: 100%;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.black};
  }
`;
