import React, {Fragment} from 'react'
import {  Link } from "react-router-dom";
import Container from '../Container/Container';
import Logo from '../assets/images/Logo-mobile-min.svg'
import css from './Characters.module.scss'
import Search from '../assets/images/Search-icon.svg'
import Media from 'react-media';
import Logodesk from '../assets/images/Logo-desktop-min.svg'


const Characters = ({ props }) => {
  
  return (
    <Container>
       <Media
            queries={{
              mobile: { minWidth: 280, maxWidth:1019 },
              other: { minWidth: 1020 },
            }}
          >
            {matches => {
              return (
                <Fragment>
                  {matches.mobile &&    <img className={css.logo} src={Logo} alt='pic'></img> }
                  {matches.other &&   <img className={css.logo_desk} src={Logodesk} alt='pic'></img> }
                </Fragment>
              );
            }}
          </Media>
         
        <div className={css.div_input}>     
      <input className={css.input} placeholder='Filter by name...' type="text" value={props.searchTerm} onChange={props.handleSearch} />
      
             <img className={css.img} src={Search } alt='search' /> 
             </div> 
              <ul className={css.list}>
                {props.filteredCharacters.map((character) => (
                  <li className={css.item}  key={character.id}>
                        <Link className={css.link} to={`/character/${character.id}`}>
                            <img className={css.images} src={ character.image} alt='img' />
                            <h3 className={css.title}>{character.name }</h3>
                            <p className={css.text}>{character.species }</p>
                        </Link>
                  </li>
                ))}
              </ul>
            </Container>
  )
}

export default Characters
