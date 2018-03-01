import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Pokemon from '../Poekmon/Pokemon';

import './Pokemons.css';

class Pokemons extends Component {
    static propTypes = {
        pokemons: PropTypes.object
    };

    static defaultProps = {
        pokemons: null
    };

    renderPokemons = () => {
        if (this.props.pokemons) {
            const pokemon = this.props.pokemons.data;
            console.log(pokemon);
            return <Pokemon name={pokemon.name} imgFront={pokemon.sprites.front_default} imgBack={pokemon.sprites.back_default} abilities={pokemon.abilities}/>
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
            </div>
        )
    }
}

const mapStatToProps = state => ({
    pokemons: state.poke.pokemons
});

export default connect(mapStatToProps)(Pokemons);
