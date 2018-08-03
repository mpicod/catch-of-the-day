import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";
import base from "../base";

class App extends React.Component {
    state = {
        fishes: {},
        order: {}
    };

    componentDidMount(){
        const { params } = this.props.match;
        // d'abord, re-instaurer le stockage local
        const localStorageRef = localStorage.getItem(params.storeId);
        if (localStorageRef) {
            this.setState({order: JSON.parse(localStorageRef)})
            // string to object 
        }
        this.ref = base.syncState(`${params.storeId}/fishes`, {
            context: this,
            state: 'fishes',
        });
        // on veut juste l'objet poissons donc on laisse le reste 
    };

    componentWillUnmount(){
        base.removeBinding(this.ref);
        // on stop la connexion quand on quitte la page (le component est désassemblé)
    }

    componentDidUpdate(){
        localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order))
        // strigify transforme l'objet en string 
    }
    addFish = (fish) => {
        console.log("Adding fish!");
        // 1. Faire une copy de l'état actuel
        const fishes = {...this.state.fishes}
        // 2. Ajouter le nouveau poisson aux autres
        fishes[`fish${Date.now()}`] = fish;
        // 3. Mettre le nouvel état dans les états
        this.setState({
            fishes // fishes : fishies
            // ajoute le nouveau poisson à la copie des états, et remplace l'original par notre copie
        });
    };
    updateFish = (key, updatedFish) => {
        //1. Faire une copie de l'état actuel
        const fishes = {...this.state.fishes};
        //2. Update de l'état
        fishes[key] = updatedFish;
        //3. Assigner à l'état
        this.setState({fishes});
    }
    deleteFish = (key) => {
        //1. Copie état
        const fishes = {...this.state.fishes};
        //2. Update de l'état
        fishes[key] = null;
        //3 assigner état
        this.setState({fishes})
    }
    loadSampleFishes = () => {
        this.setState({fishes: sampleFishes})
    }
    addToOrder = (key) => {
        //1. Copier l'état
        const order = {...this.state.order};
        //2. Ajouter ou mettre à jour nombre
        order[key] = order[key] + 1 || 1; 
        // si le poisson existe, on ajoute 1, sinon on démarre à 1
        //3. Appeler setState pour mettre à jour état
        this.setState({order});
    }
    removeFromOrder = key => {
        //1. Copier l'état
        const order = {...this.state.order};
        //2. supprime
        delete order[key]; 
        //3. Appeler setState pour mettre à jour état
        this.setState({order});
    }
    render(){
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Wes is cool"/>
                    <ul className="fishes">
                        {Object.keys(this.state.fishes).map(key => (
                            <Fish 
                                key={key} 
                                index={key}
                                details={this.state.fishes[key]}
                                addToOrder={this.addToOrder}
                                />
                            ))}
                        {/* On utilise la method key pour pouvoir maper l'objet, et pour chaque key on balance un composant, qui a un identifiant unique, la key */}
                    </ul>
                </div> 
                <Order 
                    fishes={this.state.fishes} 
                    order={this.state.order}
                    removeFromOrder={this.removeFromOrder}
                />
                <Inventory 
                    addFish={this.addFish} 
                    updateFish={this.updateFish}
                    deleteFish={this.deleteFish}
                    loadSampleFishes={this.loadSampleFishes}
                    fishes={this.state.fishes}
                />
            </div>
        )
    }
}

export default App;