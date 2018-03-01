import React, {Component} from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {Field, reduxForm} from 'redux-form';
import * as actions from "../../actions/index";

import './Search.css';

class Search extends Component {
    static propTypes = {
        fetchPokemon: PropTypes.func
    };

    static defaultProps = {
        fetchPokemon: () => {
        }
    };

    handleFormSubmit = ({pokemon}) => {
        console.log(pokemon);
        this.props.fetchPokemon(pokemon);
    };

    render() {
        const {handleSubmit} = this.props;

        return (
            <div className="container-fluid search d-flex flex-column align-items-center justify-content-center">
                <div className="title">
                    <h1>Find pokemons: </h1>
                </div>
                <form style={{marginTop: '50px'}} className="col-6"
                      onSubmit={handleSubmit((values) => this.handleFormSubmit(values))}>
                    <Field type="text" component="input" name="pokemon"/>
                    <button action="submit" className="btn btn-primary">Search</button>
                </form>
            </div>
        )
    }
}

const reduxFormSearch = reduxForm({
    form: 'search'
})(Search);

export default connect(null, actions)(reduxFormSearch);