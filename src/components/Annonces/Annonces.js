import React from 'react';
import { connect } from 'react-redux';
import * as AnnonceAction from "../redux/action/AnnonceAction";
import PropTypes from 'prop-types';
import annonceReducer from '../redux/reducers/annonceReducer';

class Annonces extends React.Component {

    state = {
        annonce: {
            title: "",
            description: "",
            lieu: "",
            img:""
        }
    };

    //this.handleChange = this.handleChange.bind(this);

    handleChange = event => {
        const annonce = { ...this.state.annonce, title: event.target.value };
        this.setState({ annonce });
    };

    handleChangeDescription = event => {
        const annonce = { ...this.state.annonce, description: event.target.value };
        this.setState({ annonce });
    };

    handleChangeLieu = event => {
        const annonce = { ...this.state.annonce, lieu: event.target.value };
        this.setState({ annonce });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        alert(this.state.annonce.title);
        this.props.dispatch(AnnonceAction.createAnnonce(this.state.annonce))
        console.log(this.props);
    };

    render() {
        return (
            <div class="card-body">
                <form onSubmit={this.handleSubmit}>
                    <h2>Anonces</h2>
                    <h3>Ajouter une annonce</h3>
                    <div class="form-group row mb-2">
                        <label class="col-md-2 col-form-label" for="firstNameId">Titre de l'annonce</label>
                        <div class="col-md-6">
                            <input type="text" onChange={this.handleChange} value={this.state.annonce.title} placeholder="Titre" />
                        </div>
                    </div>
                    <div class="form-group row mb-2">
                        <label class="col-md-2 col-form-label" for="firstNameId">Description</label>
                        <div class="col-md-6">
                            <input type="text" onChange={this.handleChangeDescription} value={this.state.annonce.description} placeholder="Description" />
                        </div>
                    </div>
                    <div class="form-group row mb-2">
                        <label class="col-md-2 col-form-label" for="firstNameId">Lieu</label>
                        <div class="col-md-6">
                            <input type="text" onChange={this.handleChangeLieu} value={this.state.annonce.lieu} placeholder="Lieu" />
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="exampleFormControlFile1">Example file input</label>
                        <input type="file" class="form-control-file" id="exampleFormControlFile1" onChange={this.handleChangeImg} value={this.state.annonce.img} placeholder="Image"/>
                    </div>

                    <div class="">
                        <input type="submit" value="Ajouter" />
                    </div>

                    <div class="card">
                    <div class="card-body">
                    {this.props.annonce.map(annonce => (
                        
                        <div key={annonce.title}>
                        <img src={annonce.img} class="card-img-top" alt="..."/>
                        <h5 class="card-title">{annonce.description}</h5>
                                <p class="card-text">{annonce.lieu}</p>
                        {annonce.title}</div>
                    ))}
                    </div>
                    </div>
                </form>
            </div>
        );
    }
}

Annonces.propTypes = {
    annonce: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        annonce: state.annonce
    }
}

function mapDispatchToProps(dispatch) {
    return {
        createAnnonce: annonce => dispatch(AnnonceAction.createAnnonce(annonce))
    };
}

export default connect(
    mapStateToProps)(Annonces);