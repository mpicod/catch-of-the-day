import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
    // constructor(){
    //     super()
    //     this.goToStore = this.goToStore.bind(this)

    //     // les méthodes custom (comme goToStore) des composants react n'héritent pas de la liaison avec l'objet initial. Il faut donc recreer le lien de l'instance avec le parent. 
    //     // super permet d'appeler l'objet parent
           // plutot que d'utiliser un constructeur, on peut juste rajouter une proriété à l'objet qui est une fonction arrow. Ce comportement est du aux propriétés des fonctions arrow
    // }
    myInput = React.createRef();

    goToStore = (event) => {
        event.preventDefault();
        const storeName = this.myInput.value.value;

        this.props.history.push(`/store/${storeName}`)
    }
    render(){
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
            {/** Commentaires JSX jamais à la racine du composant, sinon il y a plusieurs enfants et le render craque. On peut utiliser un fragment, import {Fragment} from 'react, et s'en servir de container invisible pour avoir un seul noeud à la racine **/}
                <h2>Please enter a Store</h2>
                <input 
                    type="text" 
                    ref={this.myInput}
                    required 
                    placeholder="Store Name" 
                    defaultValue={getFunName()}/>
                <button type="submit">Visit Store </button> 
                {/* Pas de parenthèse sur la fonction associée à l'évenement sinon elle devient auto invoquée */}
            </form>
        )
    }
}

export default StorePicker;