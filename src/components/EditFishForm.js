import React from 'react';


class EditFishForm extends React.Component{

    handleChange = (event) => {
        console.log(event)
        // React bloque les inputs s'ils ne sont pas associés à un onChange event, donc on le crée, on met à jour le poisson
        //1. On fait une copie du poisson
        const updatedFish = {
            ...this.props.fish,
            [event.currentTarget.name] : event.currentTarget.value
        }
        // Grace à event.currenttarget, et l'attribut name de l'input, on sait quel élément a été modofié, donc pas besoin de faire plusieurs methods handleNameChange, handleDescChange etc.
        this.props.updateFish(this.props.index, updatedFish);
    }
    render(){
        return (
            <div className="fish-edit">
                <input name="name" type="text" placeholder="Name" onChange={this.handleChange} value={this.props.fish.name} />
                <input name="price" type="text" placeholder="Price" onChange={this.handleChange} value={this.props.fish.price} />
                <select name="status" type="text" placeholder="Status" onChange={this.handleChange} value={this.props.fish.status} >
                    <option value="available">Fresh</option>
                    <option value="unavailable">Sold Out</option>
                </select>
                <textarea name="desc" type="text" placeholder="Desc" onChange={this.handleChange} value={this.props.fish.desc} />
                <input name="image" type="text" placeholder="Image" onChange={this.handleChange} value={this.props.fish.image} />
                <button onClick={() => this.props.deleteFish(this.props.index)}>Remove fish</button>
            </div>
        )
    }
}

export default EditFishForm;