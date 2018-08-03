import React from 'react';
import AddFishForm from './AddFishForm';
import EditFishForm from './EditFishForm';

class Inventory extends React.Component {
    render(){
        return (
            <div className="inventory">
                <h2>Inventory</h2>
                {Object.keys(this.props.fishes).map(key => 
                    <EditFishForm 
                        fish={this.props.fishes[key]}
                        key={key}
                        index={key}
                        updateFish={this.props.updateFish}
                        deleteFish={this.props.deleteFish}
                        />
                )}
                {/* toujours convertir l'objet en array avant d'utiliser les méthodes d'array... */}
                <AddFishForm addFish={this.props.addFish}/>
                {/* props récupère les attributs du parents */}
                <button onClick={this.props.loadSampleFishes} >Load Sample Fishes</button>
            </div>
        )
    }
}

export default Inventory;