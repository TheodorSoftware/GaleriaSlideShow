import React from "react";
import './PaintingPresetation.scss';

const PaintingPresetation = (props) => {
    return (
        <React.Fragment>
            <div className="presentation__slide">
                <div className="presentation__slide__left">
                    <img className="presentation__slide__left__image" src="../../assets/starry-night/hero-small.jpg" alt="large-imagine" />
                    <button className="presentation__slide__left__image"> VIEW IMAGE </button>
                </div>

                <div className="presentation__slide__center">
                    <div className="presentation__slide__center__info">
                        <h1 className="presentation__slide__center__info__title"> Starry Nigth </h1>
                        <h3 className="presentation__slide__center__info__painter"> Vincent Van Gogh </h3>
                    </div>
                    <img src="../../assets/starry-night/artist.jpg" alt="artist-image"/>
                </div>

                <div className="presentation__slide__rigth">
                    <h1 className="presentation__slide__rigth__year"> 1889 </h1>
                    <p className="presentation__slide__rigth__year"> Although The Starry Night was painted during the day in Van Gogh's ground-floor studio, it would be inaccurate to state that the picture was painted from memory. The view has been identified as the one from his bedroom window, facing east, a view which Van Gogh painted variations of no fewer than twenty-one times, including The Starry Night. "Through the iron-barred window," he wrote to his brother, Theo, around 23 May 1889, "I can see an enclosed square of wheat ... above which, in the morning, I watch the sun rise in all its glory." </p>
                    <a className="presentation__slide__rigth__link"> GO TO SOURCE </a>
                </div>

            </div>
        </React.Fragment>
    )
}

export default PaintingPresetation;