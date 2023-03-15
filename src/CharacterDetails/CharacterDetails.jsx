import React, { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import css from './CharacterDetails.module.scss'
import Container from '../Container/Container';
import Back from '../assets/images/arrow_back.svg'



const CharacterDetails = () => {
  const [character, setCharacter] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchCharacter = async () => {
      const result = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
      setCharacter(result.data);
    };
    fetchCharacter();
  }, [id]);

  if (!character) {
    return <div>Loading...</div>;
  }

    return (
        <Container>
            <div className={css.div}>
                
           
                <Link className={css.link} to="/">
                    <img className={css.img} src={Back } alt="back" />
                     <p >Go back</p> 
                </Link>
                 </div>
            <article className={css.detail}>
        
                <img className={css.detail__img} src={character.image} alt=''></img>
                <div className={css.detail__info}>
                    <h3 className={css.detail__info__name}>{character.name}</h3>
                    <p className={css.info}>Informations </p>
                    <p className={css.detail__info__attribute}>Gender<span className={css.detail__info__title}>{ character.gender}</span> </p>
                    <p className={css.detail__info__attribute}>Status  <span className={css.detail__info__title}>{character.status}</span></p>
                    <p className={css.detail__info__attribute}>Species <span className={css.detail__info__title}>{character.species}</span></p>
                    <p className={css.detail__info__attribute}>Origin <span className={css.detail__info__title}>{character.origin.name}</span></p>
                    <p className={css.detail__info__attribute}>Type<span className={css.detail__info__title}>{character.type==='' ? 'Unknow' : character.type}</span></p>
          </div>
          
            </article>     

      </Container>
      
  );
}

export default CharacterDetails
