import React from 'react';
import {formatPrice} from '../helpers';
import { TransitionGroup, CSSTransition} from 'react-transition-group';

class Order extends React.Component {
    renderOrder = key => {
        const fish = this.props.fishes[key];
        const count = this.props.order[key];
        const isAvailable = fish && fish.status === 'available';

        // On s'assure que les poissons soient bien chargé vant d'afficher la commande, sinon ça va sauter, puisque le stockage local est plus rapide que Firebase
        if (!fish) return null

        if (!isAvailable) {
            return (
            <CSSTransition 
                classNames="order" 
                key={key} 
                timeout={{ enter: 250, exit: 250 }}
            >
                <li key={key}> 
                            Sorry {fish ? fish.name : 'fish'} is no longer available.
                        </li>
            </CSSTransition>
            );}
        return (
            <CSSTransition 
                classNames="order" 
                key={key} 
                timeout={{ enter: 250, exit: 250 }}
            >
                <li key={key}>
                    <span>
                    <TransitionGroup component="span" className="count">
                        <CSSTransition classNames="count" key={count} timeout={{enter: 250, exit: 250}}>
                            {/* double accolade = JS in react, et objet */}
                            <span>{count}</span>
                        </CSSTransition>
                    </TransitionGroup>
                    lbs {fish.name}
                    {formatPrice(count * fish.price)}
                    <button onClick={() => this.props.removeFromOrder(key)}>&times;</button>
                    </span>
                </li>
            </CSSTransition>
        );};
    // pour désengorger le rendu, on sépare un peu les élements, la fonction map appelera juste renderorder
    render(){
        const orderIds = Object.keys(this.props.order);
        const total = orderIds.reduce((prevTotal, key) => {
            const fish = this.props.fishes[key];
            const count = this.props.order[key];
            const isAvailable = fish && fish.status === 'available'; 

            if (isAvailable) {
                return prevTotal + (count * fish.price);
            }
            return prevTotal;
            // pour chaque poisson commandé si le poisson est dispo on calcul son prix selon le nbr, sinon on affiche le prix précédent
        }, 0);
        return (
            <div className="order-wrap">
                <h2>Order</h2>
                <TransitionGroup component="ul" className="order">
                    {orderIds.map(this.renderOrder)}
                    {/* pour chaque entrée dans les commandes, on affiche un item de liste */}
                </TransitionGroup>
                <div className="total">
                    Total:
                    <strong>{formatPrice(total)}</strong>
                    {/* on affiche le total formaté */}
                </div>
            </div>
        )
    }
}

export default Order;