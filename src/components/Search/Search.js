import React, {Component} from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {Field, reduxForm} from 'redux-form';
import * as actions from "../../actions/index";

import './Search.css';

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            limit: 20,
            offset: 0,
        }
    }

    static propTypes = {
        fetchPokemon: PropTypes.func,
        fetchAllPoke: PropTypes.func
    };

    static defaultProps = {
        fetchPokemon: () => {
        },
        fetchAllPoke: () => {
        }
    };

    handleFetchAllPoke = () => {
        console.log('go');
        this.props.fetchAllPoke(this.state.limit, this.state.offset);
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
                    <div>
                        <Field type="text" component="input" name="pokemon"/>
                        {/*<span>pokemon/"id or name" or type/"id or type" or ability/"id or ability"</span>*/}
                        <span>pokemon/"id or name"</span>
                    </div>
                    <button action="submit" className="btn btn-primary">Search</button>
                </form>
                <p>or</p>
                <button onClick={this.handleFetchAllPoke} className="btn btn-primary fetch-all-poke">Display all
                    pokemons
                </button>
            </div>
        )
    }
}

const reduxFormSearch = reduxForm({
    form: 'search'
})(Search);

export default connect(null, actions)(reduxFormSearch);