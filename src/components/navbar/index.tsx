import Image from 'next/image';
import Link from 'next/link';
import { StyledNavbar } from './styles';
export const Navbar = () => {
  return (
    <StyledNavbar>
      <Image
        src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png'
        alt='Icono de la app'
        width={70}
        height={70}
      />
      <Link href='/'>
      <h2>
        P<span>kemon</span>
      </h2>
      </Link>
      <ul>
        <li>
          <Link href='/favorites'>Favoritos</Link>
        </li>
      </ul>
    </StyledNavbar>
  );
};
