import styled from "styled-components";

export const StyledCardDetailPokemon = styled.article`
  display: grid;
  grid-template-columns: 1fr;
  padding: .8rem;
  background-color: ${({ theme }) => theme.colors.darkGray};
  border-radius: 0.4rem;

  @media (min-width: 600px) {
    grid-template-columns: auto auto;
  }
`;

export const CardHeader = styled.div`
  display: grid;
  place-items: center;

  @media (min-width: 600px) {
    grid-template-columns: 1fr auto;
    justify-content: space-between;
    align-items: center;
  }
`;

export const CardTitle = styled.h1`
  margin: 0.8rem 0;
  color: ${({ theme }) => theme.colors.white};
  text-transform: capitalize;
`;

export const CardBody = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: space-between;
  gap: 0.8rem;
`

export const ButtonFavorite = styled.button`
  align-items: center;
  background-image: linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb);
  border: 0;
  border-radius: .8rem;
  margin: .8rem;
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  box-sizing: border-box;
  color: ${({theme}) => theme.colors.white};
  display: flex;
  font-size: 1.6rem;
  justify-content: center;
  line-height: 1em;
  max-width: 100%;
  min-width: 14.0rem;
  padding: .3rem;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.3s;

  &:active:hover {
    outline: 0;
  }

  & span {
    background-color: ${({theme}) => theme.colors.black};
    padding: 1.6rem 2.4rem;
    border-radius: .6rem;
    width: 100%;
    height: 100%;
    transition: 300ms;
  }

  &:hover span {
    background: none;
  }
  &:active {
    transform: scale(0.9);
  }

 
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: minmax(auto, 102.4rem);
  justify-content: center;
  padding: 1.6rem;
`;
