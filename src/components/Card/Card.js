import React  from 'react';
import { NavLink } from 'react-router-dom';
import './Card.scss';

const Card = (props) => {
    return (
        <div className='card'>
            <div className='card__image'>
                <img alt="card-image" src={props.thumbnailImage} />   
            </div>
            <NavLink to='picture/1' className='card__overlay'>
                <div className="card__overlay__info">
                    <p className='card__overlay__info__name'> { props.name} </p>
                    <p className='card__overlay__info__painter'> {props.artist} </p>
                </div>
            </NavLink>
        </div>
    )
}

export default Card;