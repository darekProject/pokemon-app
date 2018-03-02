import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Pokemon from '../Poekmon/Pokemon';
import * as actions from '../../actions/index'

import './Pokemons.css';

class Pokemons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            limit: 20,
            offset: 20
        }
    }

    static propTypes = {
        pokemons: PropTypes.array,
        errorMessage: PropTypes.object
    };

    static defaultProps = {
        pokemons: null,
        errorMessage: null
    };

    handleDisplayMorePokemons = () => {

        this.props.fetchAllPoke(this.state.limit, this.state.offset);

        const offset = this.state.offset + 20;
        this.setState({offset: offset});
    };

    renderPokemons = () => {
        if (this.props.pokemons) {
            const pokemons = this.props.pokemons;
            return pokemons.map((pokemon, index) => {
                return <Pokemon key={index} name={pokemon.name} imgFront={pokemon.sprites.front_default}
                                imgBack={pokemon.sprites.back_default} abilities={pokemon.abilities}/>
            });
        } else if (this.props.errorMessage) {
            return <div>Oops error! Try again!!</div>
        } else {
            return <div>Find pokemons...</div>
        }
    };

    render() {
        return (
            <div className="container wrapper-pokemons">
                <div className="row">
                    {this.renderPokemons()}
                </div>
                <div className="row">
                    {this.props.pokemons ? <button onClick={this.handleDisplayMorePokemons} className="btn btn-primary fetch-all-poke">Show more...</button> : null}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    pokemons: state.poke.pokemons,
    errorMessage: state.poke.error
});

export default connect(mapStateToProps, actions)(Pokemons);
