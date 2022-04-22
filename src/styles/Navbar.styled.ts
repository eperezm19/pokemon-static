import styled from 'styled-components';

export const StyledNavbar = styled.nav`
  display: grid;
  grid-template-columns: auto auto 1fr;
  align-items: center;
  height: inherit;
  width: 100%;
  padding: 0 16px;
  background-color: ${({ theme }) => theme.colors.darkGray};
  h2 {
    font-size: 22-px;
    color: ${({ theme }) => theme.colors.white};
    & span {
      font-size: 16px;
    }
  }
  ul {
    display: grid;
    gap: 8px;
    height: inherit;
    justify-content: end;
    align-items: center;
    list-style: none;
  }
  li a {
    align-items: end;
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
  }
`;
