import React from 'react';

const Header = (props) => (
    // return implicite de la fonction arrow s'il n'y a pas d'accolades
    <header className="top">
        <h1>
            Catch
            <span className="ofThe">
                <span className="of">Of</span>
                <span className="the">The</span>
            </span>
            Day
        </h1>
        <h3 className="tagline">
            <span>{props.tagline}</span>
            {/* This est le composant, si'il n'y a pas de composant, pas besoin de this; On peut aussi destructurer props en passant directement les arguments dans la fonction, et du coup, pas besoin de props non plus*/}
        </h3>
    </header>
)

// Lorsqu'un composant n'a pas d'état ou de data particulières à passer, il est inutile d'utiliser un composant React, mais on peut à la place en faire un composant classique JS

export default Header;