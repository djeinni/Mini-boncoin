import React from 'react';

class Annonces extends React.Component {

        state = {
            annonce: {
                title: ""
            }
        };
        //this.handleChange = this.handleChange.bind(this);

    handleChange = event => {
        const annonce = { ...this.state.annonce, title: event.target.value };
        this.setState({ annonce });
    };

    handleSubmit = (event) =>{
        event.preventDefault();
        alert(this.state.annonce.title);
        const annonce = { ...this.state.annonce, title: event.target.value};
    } 

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Anonces</h2>
                <h3>Ajouter une annonce</h3>
                <input type="text" onChange={this.handleChange} value={this.state.annonce.title}/>
                <input type="submit" value="Ajouter" />
            </form>
        );
    }
}

export default Annonces;