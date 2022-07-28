import styled from "styled-components";

export const StyledCardPokemon = styled.article`
  display: grid;
  grid-template-rows: 9.0rem 6.0rem;
  height: 15.0rem;
  width: 100%;
  border-radius: 0.4rem;
  background-color: ${({ theme }) => theme.colors.darkGray};
`;

export const CardBody = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: .8rem;
  height: 100%;
  padding: 1.2rem;
`

export const IconLike = styled.span`
  height: 2.4rem;
  width: 2.4rem;
  color: ${({theme}) => theme.colors.purplePrimary};
`

export const CardTitle = styled.h2`
  font-size: 1.6rem;
  text-transform: capitalize;
  color: ${({theme}) => theme.colors.white};
`
export const GridCardPokemon = styled.div`
  display: grid;
  gap: 1.2rem;
  grid-template-columns: repeat(auto-fill, minmax(22rem, 1fr));
  padding: 1.6rem;
`;
