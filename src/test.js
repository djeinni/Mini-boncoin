import React from 'react';
import {connect} from 'react-redux';
import * as AnnonceAction from "../redux/action/AnnonceAction";
import PropTypes from 'prop-types';

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
        this.props.dispatch(AnnonceAction.createAnnonce(this.state.annonce))
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Anonces</h2>
                <h3>Ajouter une annonce</h3>
                <input type="text" onChange={this.handleChange} value={this.state.annonce.title}/>
                <input type="submit" value="Ajouter" />
                {this.props.annonce.map(annonce => (
                    <div key={annonce.title}>{annonce.title}</div>
                ))}
            </form>
        );
    }
}


Annonces.propTypes = {
    annonce: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps){
    return{
        courses: state.courses
    };
}

export default connect(
    mapStateToProps) (Annonces);