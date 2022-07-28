import { Pokemon } from 'interface'
import Image from 'next/image'
import React, { FC } from 'react'
import { ButtonFavorite, CardBody, CardHeader, CardTitle, StyledCardDetailPokemon } from './styles'

interface Props {
  pokemon: Pokemon
}

export const CardDetailPokemon:FC<Props> = ({pokemon}) => {
  return (
    <StyledCardDetailPokemon>
      <Image src={pokemon.sprites.other?.dream_world.front_default || './no-image'} alt={pokemon.name} height='200' width='200'/>
      <div>
        <CardHeader>
          <CardTitle>{pokemon.name}</CardTitle>
          <ButtonFavorite>
            <span>Guardar En Favorito</span>
          </ButtonFavorite>
        </CardHeader>
        <CardBody>
          <Image 
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            width={100}
            height={100}
          />
          <Image 
            src={pokemon.sprites.back_default}
            alt={pokemon.name}
            width={100}
            height={100}
          />
          <Image 
            src={pokemon.sprites.front_shiny}
            alt={pokemon.name}
            width={100}
            height={100}
          />
          <Image 
            src={pokemon.sprites.back_shiny}
            alt={pokemon.name}
            width={100}
            height={100}
          />
        </CardBody>
      </div>
    </StyledCardDetailPokemon>
  )
}
