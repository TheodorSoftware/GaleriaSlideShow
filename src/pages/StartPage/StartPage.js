import React from 'react';
import { NavLink } from 'react-router-dom';
import './StartPage.scss';

const StartPage = () => {
    return(
        <React.Fragment>
            <div className="start__page">
                <NavLink to='/galeria' className="start__page__link"> Open Galeria </NavLink>
            </div>
        </React.Fragment>
    )
};

export default StartPage;