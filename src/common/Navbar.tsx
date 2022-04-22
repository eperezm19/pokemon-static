import { StyledNavbar } from '@styles/Navbar.styled';
import Image from 'next/image';
export const Navbar = () => {
  return (
    <StyledNavbar>
      <Image
        src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png'
        alt='Icono de la app'
        width={70}
        height={70}
      />
      <h2>
        P<span>kemon</span>
      </h2>
      <ul>
        <li>
          <a href='/'>Favoritos</a>
        </li>
      </ul>
    </StyledNavbar>
  );
};
